import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import { useNavigate } from "react-router";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        // href="/"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "20px",
        }}
      >
        <IconFont type="icon-tuichu" />
        <p style={{ marginLeft: "5px" }}>Log Out</p>
      </a>
    ),
  },
];

export const DropDown = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <Dropdown
      menu={{
        items,
        onClick: handleLogOut,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
