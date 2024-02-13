/* eslint react/prop-types: 0 */

import { jwtDecode } from "jwt-decode";
import { Fragment } from "react";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = ({ role }) => {
  const getToken = localStorage.getItem("token");
  const nameUser = jwtDecode(getToken).user;
  // Guard clause
  if (!role) return;

  return (
    <Fragment>
      {role?.includes(nameUser) ? <Outlet /> : <Navigate to="/login" />}
    </Fragment>
  );
};