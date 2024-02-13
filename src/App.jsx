/* eslint react/prop-types: 0 */
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoginForm } from "./pages/Login/LoginForm";
import { jwtDecode } from "jwt-decode";
import { Suspense, useEffect, useState } from "react";
import { LazzyLoading } from "./components/lazzyLoading/lazzyLoading";
import { Dc, Humo, Marvel, User } from "./routes/LazyRoutes";
import { useSelector } from "react-redux";

function App() {
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
    <Suspense fallback={<LazzyLoading />}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user" element={<User />} />
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
}

export default App;
