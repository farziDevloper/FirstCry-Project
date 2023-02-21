/* eslint-disable no-case-declarations */
import React from "react";
const Input = ({ inputType, elemConfig, changed, options }) => {
  switch (inputType) {
    case "input":
      return <input type="text" {...elemConfig} onChange={changed} />;
    case "select":
      const optionsHtml = options.map((item) => {
        return (
          <option value={item.value} key={item.name}>
            {item.name}
          </option>
        );
      });
      return <select {...elemConfig}>{optionsHtml}</select>;

    default:
      return "";
  }
};

export default Input;
