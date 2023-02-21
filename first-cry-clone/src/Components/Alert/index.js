import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./style";
import { removeAlert } from "../../store/actions/alert";

export default function Alert() {
  const dispatch = useDispatch();
  const alertConfig = useSelector((state) => state.alert);
  useEffect(() => {
    if (alertConfig) {
      setTimeout(() => {
        // dispatch(removeAlert());
      }, alertConfig.timeout);
    } else {
      return null;
    }
  }, [alertConfig]);
  const { message, status } = alertConfig;
  return <Wrapper className={ `${status}` }>{ message && <p>{ message }</p> }</Wrapper>;
}
