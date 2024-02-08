import { jwtDecode } from "jwt-decode";
import style from "./header.module.css";

export const Header = () => {
  const token = localStorage.getItem("token");
  const tokenName = token ? jwtDecode(token).user : null;
  return (
    <div className={style.headerContent}>
      <h1>Humo</h1>
      {token ? tokenName : ""}
    </div>
  );
};
