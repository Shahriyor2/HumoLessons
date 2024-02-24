import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setAuthenticated } from "../../../store/UserReducer/UserReducer";
import classes from "./dropdown.module.scss";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: (
      <Space className={classes["infoStyle"]}>
        <Link to="/user-info">
          <UserOutlined />
        </Link>
        <p>User</p>
      </Space>
    ),
  },
  {
    key: "2",
    label: (
      <Space className={classes["linkStyle"]}>
        <LogoutOutlined />
        <p>Log Out</p>
      </Space>
    ),
  },
];

export const DropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = ({ key }) => {
    if (key === "2") {
      localStorage.removeItem("token");
      dispatch(setAuthenticated(false));
      localStorage.removeItem("authenticated");
      navigate("/login");
    }
  };

  return (
    <Dropdown
      trigger={"click"}
      menu={{
        items,
        onClick: handleLogOut,
      }}
    >
      <Space align="center">
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};
