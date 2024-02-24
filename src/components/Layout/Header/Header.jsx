import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout } from "antd";
import { useState } from "react";
import classes from "../../Layout/Header/header.module.scss";
import { Sidebar } from "../../Sidebar/Sidebar";
import { DropDown } from "../../Ui/Dropdown/Dropdown";
import { Content } from "../Content/Content";
import { Footer } from "../Footer/Footer";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setShowForm } from "../../../store/headerAddSlice/headerAddSlice";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <Layout>
      <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Sidebar />
      </Layout.Sider>
      <Layout className="site-layout">
        <Layout.Header className={classes.userHeader}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className={classes.headerBtn}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />

          <div style={{ display: "flex", alignItems: "center" }}>
            {/* кнопка добавления пользователя */}
            {location.pathname === "/user" && (
              <div className={classes.plusIconBtn}>
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => dispatch(setShowForm(true))}
                >
                  Добавить пользователя
                </Button>
              </div>
            )}
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
