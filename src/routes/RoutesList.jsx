/* eslint react/prop-types: 0 */
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoginForm } from "../pages/Login/LoginForm";
import { NotFound } from "../pages/NotFound/NotFound";
import { Dc, Humo, Marvel, User } from "../routes/LazyRoutes";
import { ProtectedRoute } from "./PrivateRoute";

export const RoutesList = () => {
  const roles = {
    SUPPORT: "johnd",
    ANALYTIC: "mor_2314",
    SUPERVISOR: "kevinryan",
  };
  const { SUPPORT, ANALYTIC, SUPERVISOR } = roles;
  const { authenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated, navigate]);

  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        {!authenticated && <Route path="/login" element={<LoginForm />} />}
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
        {authenticated && (
          <>
            <Route element={<ProtectedRoute role={[SUPPORT, ANALYTIC]} />}>
              <Route path="/marvel" element={<Marvel />} />
            </Route>
            <Route element={<ProtectedRoute role={[SUPERVISOR]} />}>
              <Route path="/dc" element={<Dc />} />
            </Route>
            <Route element={<ProtectedRoute role={[SUPERVISOR, SUPPORT]} />}>
              <Route path="/humo" element={<Humo />} />
            </Route>
          </>
        )}
      </Routes>
    </Suspense>
  );
};
