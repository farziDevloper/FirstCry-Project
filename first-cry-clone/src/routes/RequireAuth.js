import PropTypes from "prop-types";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthLayout from "../components/Layout/authLayout";
import { getStorage, getUser } from "../utils/common";
import utils from "../utils/common";

export default function RequireAuth({ children }) {
  let isAuth = true;
  if (getUser()) {
    isAuth = true;
  }

  const location = useLocation();

  return isAuth ? (
    <AuthLayout>{children}</AuthLayout>
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
