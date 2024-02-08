import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Marvel } from "./pages/Users/Marvel";
import { DC } from "./pages/Users/DC";
import { Humo } from "./pages/Users/Humo";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { SecondLogin } from "./components/SecondLogin";
import { User } from "./pages/Users/User";
import "./index.css";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  const roles = {
    SUPPORT: "johnd",
    ANALYTIC: "mor_2314",
    SUPERVISOR: "kevinryan",
  };
  const { SUPPORT, ANALYTIC, SUPERVISOR } = roles;
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const decodedToken = jwtDecode(token);
      if (decodedToken) {
        setAuthenticated(true);
      } else {
        navigate("/");
      }
    }
  }, [navigate]);
  return (
    <Routes>
      <Route path="/" element={<SecondLogin />} />
      {authenticated && (
        <>
          <Route path="/user" element={<User />} />
          <Route element={<ProtectedRoute role={[SUPPORT, ANALYTIC]} />}>
            <Route path="/marvel" element={<Marvel />} />
          </Route>
          <Route element={<ProtectedRoute role={[SUPERVISOR]} />}>
            <Route path="/dc" element={<DC />} />
          </Route>
          <Route element={<ProtectedRoute role={[SUPERVISOR, SUPPORT]} />}>
            <Route path="/humo" element={<Humo />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
