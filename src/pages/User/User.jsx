import {
  DeleteOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PlusOutlined,
  SettingTwoTone,
} from "@ant-design/icons";
import { Button, Layout, Menu, Space, Table, Tag, theme } from "antd";
import { useState } from "react";
import classes from "./user.module.scss";
import { AddDataForm } from "../../components/Ui/AddDataForm/AddDataForm";
const { Header, Sider, Content } = Layout;

function User() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [data, setData] = useState([
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <button
            className={classes.btnRecord}
            onClick={() => handleDelete(record.key)}
          >
            <DeleteOutlined />
          </button>
        </Space>
      ),
    },
  ];

  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Marvel",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "DC",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Humo",
            },
            {
              key: "4",
              icon: <SettingTwoTone />,
              label: "Settings",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className={classes.userHeader}
          style={{
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 34,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <AddDataForm showForm={showForm} setShowForm={setShowForm} />
          <div className={classes.addUser}>
            <Button
              type="text"
              icon={<PlusOutlined />}
              onClick={() => setShowForm(true)}
            />
          </div>
          <Table columns={columns} dataSource={data} />
        </Content>
      </Layout>
    </Layout>
  );
}
export default User;
