import { jwtDecode } from "jwt-decode";
import style from "./header.module.scss";
import { useSelector } from "react-redux";
import { DropDown } from "../../Ui/Dropdown";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const Header = () => {
  const authenticated = useSelector((state) => state.user.authenticated);
  const token = localStorage.getItem("token");
  const tokenName = token && jwtDecode(token).user;

  console.log("authenticated", authenticated);

  const backgroundStyle = authenticated
    ? { background: "rgb(226, 111, 50)" }
    : { background: "gray" };

  const avatarStyle = {
    background: "darkgray",
    marginRight: "5px",
  };

  return (
    <div style={backgroundStyle} className={style.headerContent}>
      <h1>Humo</h1>
      <div>
        <span className={style.span}>{token ? tokenName : ""}</span>
        {token && <Avatar icon={<UserOutlined />} style={avatarStyle} />}
        {token && <DropDown />}
      </div>
    </div>
  );
};
