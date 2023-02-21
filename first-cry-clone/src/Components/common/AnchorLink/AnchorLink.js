import React from "react";
import { Link } from "react-router-dom";

const AnchorLink = (props) => {
  return <Link {...props}>{props.children}</Link>;
};

export default React.memo(AnchorLink);
