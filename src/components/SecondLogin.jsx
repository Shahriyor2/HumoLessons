import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../index.css";

export const SecondLogin = () => {
  const [token, setToken] = useState("");
  const [loadings, setLoading] = useState(false);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: userData.userName,
        password: userData.password,
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
      navigate("/user", { replace: false });
    } else {
      navigate("/");
    }
  }, [token]);

  const handleChangeInput = () => {
    setUserData((prev) => ({
      ...prev,
      userName: prev.userName.length > 0 ? "" : "mor_2314",
      password: prev.password.length > 0 ? "" : "83r5^_",
    }));
  };

  return (
    <div
      style={{ marginTop: "20px", marginBottom: "20px" }}
      className="overlay"
    >
      <div className="contentBox" style={{ textAlign: "center" }}>
        <div className="userName">
          <h1 style={{ marginBottom: "5px", height: "50px" }}>Вход</h1>
          <Input
            name="userName"
            type="text"
            value={userData.userName}
            style={{ width: "220px", marginBottom: "0px" }}
            placeholder="Номер телефона/email"
            onChange={handleOnChange}
          />
          {userData.userName.length > 0 && userData.userName.length < 5 ? (
            <p
              style={{
                color: "red",
                opacity: 1,
                transition: "all 0.5s ease-in-out",
                margin: "0",
                height: "15px",
              }}
            >
              не менее 5 символов
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="password">
          <h1 style={{ marginBottom: "5px" }}>Пароль</h1>
          <Input
            name="password"
            type="password"
            value={userData.password}
            style={{ width: "220px", marginBottom: "10px" }}
            placeholder="Пароль..."
            onChange={handleOnChange}
          />
          {userData.password.length > 0 && userData.password.length < 3 ? (
            <p style={{ color: "red" }}> не менее 3 символов</p>
          ) : (
            ""
          )}
        </div>
        <Button
          style={{ marginTop: "10px", marginBottom: "10px" }}
          disabled={
            userData.password.length < 3 || userData.userName.length < 5
          }
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings}
          onClick={handleSubmit}
        >
          Вход
        </Button>
        <div
          style={{ cursor: "pointer" }}
          className="autoBlock__text"
          onClick={handleChangeInput}
        >
          <p>
            Имя поьзователя:
            <span
              style={{
                fontStyle: "italic",
                fontWeight: "600",
                marginLeft: "7px",
                color: "green",
              }}
            >
              mor_2314
            </span>
          </p>
          <p>
            Пароль:
            <span
              style={{
                fontStyle: "italic",
                fontWeight: "600",
                marginLeft: "7px",
                color: "green",
              }}
            >
              83r5^_
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
