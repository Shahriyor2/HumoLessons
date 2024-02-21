/* eslint react/prop-types: 0 */

import { jwtDecode } from "jwt-decode";
import { Fragment } from "react";
import { Navigate, Outlet } from "react-router";
import LayoutWrapper from "../components/Layout/Layout/LayoutWrapper";

export const ProtectedRoute = ({ role }) => {
  const getToken = localStorage.getItem("token");
  const { user } = jwtDecode(getToken);

  // Guard clause
  if (!role) return;

  return (
    <Fragment>
      {role?.includes(user) ? (
        <LayoutWrapper>
          <Outlet />
        </LayoutWrapper>
      ) : (
        <Navigate to="/login" />
      )}
    </Fragment>
  );
};
