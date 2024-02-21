import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setAuthenticated } from "../../store/UserReducer/UserReducer";

const linkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "27px",
  color: "red",
};

const infoStyle = {
  height: "27px",
  display: "flex",
  alignItems: "center",
};

const items = [
  {
    key: "1",
    label: (
      <Space style={infoStyle}>
        <UserOutlined />
        <p style={infoStyle}>User</p>
      </Space>
    ),
  },
  {
    key: "2",
    label: (
      <Space style={linkStyle}>
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
