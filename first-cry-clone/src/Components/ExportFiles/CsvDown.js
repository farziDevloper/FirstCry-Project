import { React, useState, useRef } from "react";
import { CSVLink } from "react-csv";
import Request from "../../utils/Request";
import { ButtonSolid } from "../styledConstants";
import IconDownload from "../../assets/images/IconDownload";

const CsvDown = ({ headers, url, params, type, title = "DOWNLOAD CSV.", contentType, reportName = "Report.csv" }) => {
  const [data, setData] = useState([]);
  const csvLinkRef = useRef(null);

  const downloadReport = () => {
    getUserList();
  };

  const getUserList = () => {
    const successHandler = (res) => {
      if (res && res.data && res.data.content) {
        console.log("res===>", res);
        setData(res.data.content);
        setTimeout(() => {
          csvLinkRef.current.link.click();
        }, 0);
      }
    };
    const errorHandler = () => {};

    const api = new Request("", successHandler, errorHandler, false);
    api.post(url, params);
  };

  return (
    <>
      <CSVLink className="flex" data={data} headers={headers} filename={reportName} ref={csvLinkRef}>
        {" "}
      </CSVLink>
      {url ? (
        <ButtonSolid as="span" className="flex flex-center" primary lg onClick={downloadReport}>
          <IconDownload className="mr8" /> {title}
        </ButtonSolid>
      ) : (
        <ButtonSolid as="span" className="flex flex-center" disabled lg>
          <IconDownload className="mr8" /> {title}
        </ButtonSolid>
      )}
    </>
  );
};

export default CsvDown;
