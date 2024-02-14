/* eslint react/prop-types: 0 */
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "../pages/Login/LoginForm";
import { NotFound } from "../pages/NotFound/NotFound";
import { Dc, Humo, Marvel, User } from "../routes/LazyRoutes";
import { ProtectedRoute } from "./PrivateRoute";

const roles = {
  SUPPORT: "johnd",
  ANALYTIC: "mor_2314",
  SUPERVISOR: "kevinryan",
};

export const RoutesList = () => {
  const { SUPPORT, ANALYTIC, SUPERVISOR } = roles;

  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />

        <Route
          path="/user"
          element={<ProtectedRoute role={[SUPPORT, ANALYTIC]} />}
        >
          <Route path="/user" element={<User />} />
        </Route>

        <Route
          path="/marvel"
          element={<ProtectedRoute role={[SUPPORT, ANALYTIC]} />}
        >
          <Route path="/marvel" element={<Marvel />} />
        </Route>

        <Route path="/dc" element={<ProtectedRoute role={[SUPERVISOR]} />}>
          <Route path="/dc" element={<Dc />} />
        </Route>

        <Route
          path="/humo"
          element={<ProtectedRoute role={[SUPERVISOR, SUPPORT]} />}
        >
          <Route path="/humo" element={<Humo />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
