import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../../store/UserReducer/UserReducer";
import { handleChange } from "../../store/LoginReducer/LoginReducer";

export const LoginLogik = () => {
  const [token, setToken] = useState("");
  const [loadings, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userName, password } = useSelector((state) => state.login.userData);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: userName,
        password: password,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert("username or password is incorrect");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      dispatch(setAuthenticated(true));
      navigate("/user", { replace: false });
    } else {
      navigate("/login");
    }
  }, [token]);

  return {
    handleSubmit,
    handleOnChange,
    loadings,
  };
};
