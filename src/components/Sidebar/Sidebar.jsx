import { RedditOutlined, SlackSquareFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<RedditOutlined />}>
          <Link to="/user">Users</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SlackSquareFilled />}>
          <Link to="/marvel">Marvel</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export { Sidebar };
