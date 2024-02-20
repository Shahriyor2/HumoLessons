import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setAuthenticated } from "../../store/UserReducer/UserReducer";
const linkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "20px",
};

const paragrahpStyle = {
  marginLeft: "5px",
};

const items = [
  {
    key: "1",
    label: (
      <Space style={linkStyle}>
        <LogoutOutlined />
        <p style={paragrahpStyle}>Log Out</p>
      </Space>
    ),
  },
];

export const DropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(setAuthenticated(false));
    localStorage.removeItem("authenticated");
    navigate("/login");
  };

  return (
    <Dropdown
      trigger={"click"}
      menu={{
        items,
        onClick: handleLogOut,
      }}
      style={{ marginTop: "10px" }}
    >
      <Space align="center">
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};
