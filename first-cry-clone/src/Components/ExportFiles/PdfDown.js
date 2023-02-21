import React, { useState } from "react";
import Request from "../../utils/Request";
import { ButtonSolid } from "../styledConstants";
import jsPDF from "jspdf";
import "jspdf-autotable";
import IconDownload from "../../assets/images/IconDownload";

const PdfDown = ({ tableHeader, getTableBody, url, params, heading, fileName }) => {
  // const [data, setData] = useState([]);

  const getUserList = () => {
    const successHandler = (res) => {
      if (res?.code == "0000") {
        console.log("res===>", res);
        // setData(res?.data);
        const tabelBody = getTableBody(res?.data?.content);
        generatePDF(tabelBody);
      }
    };
    const errorHandler = () => {};
    const api = new Request("", successHandler, errorHandler, false);
    api.post(url, params);
  };

  const handleClick = () => {
    getUserList();
  };

  const generatePDF = (tableBody) => {
    const doc = new jsPDF("l");

    if (heading) {
      doc.text(heading, 130, 20);
    }

    doc.autoTable({
      head: tableHeader,
      body: tableBody,
      startY: 25,
      // Default for all columns
      styles: { overflow: "ellipsize", cellWidth: "wrap" },
      // Override the default above for the text column
      columnStyles: { text: { cellWidth: "auto" } },
    });

    doc.save((fileName || "document") + ".pdf");
  };
  return (
    <ButtonSolid primary lg onClick={handleClick}>
      <IconDownload className="mr8" /> Download pdf
    </ButtonSolid>
  );
};

export default PdfDown;

//https://www.npmjs.com/package/jspdf-autotable
