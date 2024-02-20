/* eslint react/prop-types: 0 */

import { jwtDecode } from "jwt-decode";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = ({ role }) => {
  const getToken = localStorage.getItem("token");
  const { user } = jwtDecode(getToken);

  const { authenticated } = useSelector((state) => state.user);
  console.log(authenticated);

  // Guard clause
  if (!role) return;

  return (
    <Fragment>
      {role?.includes(user) ? <Outlet /> : <Navigate to="/login" />}
    </Fragment>
  );
};
