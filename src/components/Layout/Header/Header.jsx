import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout } from "antd";
import { useState } from "react";
import classes from "../../Layout/Header/header.module.scss";
import { Sidebar } from "../../Sidebar/Sidebar";
import { DropDown } from "../../Ui/Dropdown";
import { Content } from "../Content/Content";
import { Footer } from "../Footer/Footer";
import { MenuList } from "../MenuList/MenuList";

export const Header = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Sidebar />
        <MenuList />
      </Layout.Sider>
      <Layout className="site-layout">
        <Layout.Header className={classes.userHeader}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />

          <div>
            <Avatar
              className={classes.userImage}
              size="large"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <DropDown />
          </div>
        </Layout.Header>
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};
