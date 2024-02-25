import {
  RedditOutlined,
  SettingOutlined,
  SlackSquareFilled,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    "User",
    "1",
    <Link to="/user">
      <RedditOutlined />
    </Link>
  ),
  getItem(
    "Marvel",
    "2",
    <Link to="/marvel">
      <SlackSquareFilled />
    </Link>
  ),
  getItem("Settings", "sub2", <SettingOutlined />, [
    getItem("Team 1", "4"),
    getItem("Team 2", "5"),
  ]),
];

function Sidebar() {
  const [selectedKey, setSelectedKey] = useState("");

  useEffect(() => {
    const getKey = localStorage.getItem("key");
    setSelectedKey(getKey || "1");
  }, []);

  const handleSelectedKey = (key) => {
    localStorage.setItem("key", key);
    setSelectedKey(key);
  };
  return (
    <Menu
      theme="dark"
      mode="inline"
      items={items}
      onClick={({ key }) => handleSelectedKey(key)}
      selectedKeys={selectedKey}
    />
  );
}
export { Sidebar };
