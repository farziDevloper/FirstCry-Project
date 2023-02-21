import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TextFieldWrapper } from "../../../styledConstants";
import ErrorMessage from "../../../ErrorMessage";

export default function FormItem({ icon = null, error = "", ...elemConfig }) {
  switch (elemConfig.type) {
    case "select":
      return (
        <TextFieldWrapper>
          <div className="form-item">
            {icon && <span className="item-label">{icon}</span>}
            <Select {...elemConfig} />
          </div>
          {error && <ErrorMessage error={error} />}
        </TextFieldWrapper>
      );
    case "date":
      return (
        <TextFieldWrapper>
          <div className="form-item">
            {icon && <span className="item-label">{icon}</span>}
            <DatePicker {...elemConfig} />
          </div>
          {error && <ErrorMessage error={error} />}
        </TextFieldWrapper>
      );
    default:
      return (
        <TextFieldWrapper>
          <div className="form-item">
            {icon && <span className="item-label">{icon}</span>}
            <input {...elemConfig} />
          </div>
          {error && <ErrorMessage error={error} />}
        </TextFieldWrapper>
      );
  }
}
