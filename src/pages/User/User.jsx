import { DeleteOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Layout, Pagination, Space, Table, Tag } from "antd";
import { useState } from "react";
import { AddDataForm } from "../../components/Ui/AddDataForm/AddDataForm";
import classes from "./user.module.scss";
import { EditModal } from "../../components/Modal/Modal";
const { Content } = Layout;

function User() {
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
  const [showEditModal, setShowModalEdit] = useState(false);
  const [keyChange, setKeyChange] = useState(false);

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

          <Button
            onClick={() => handleDelete(record.key)}
            icon={<DeleteOutlined />}
          />
          <Button icon={<EditOutlined />} />
        </Space>
      ),
    },
  ];

  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const handleEdit = (id) => {
    const editId = data.includes((_id) => _id.key === id);
    if (editId) {
      setShowModalEdit(true);
    }
  };

  return (
    <Layout>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280,
        }}
      >
        <AddDataForm
          key={keyChange ? "showForm" : "hideForm"}
          showForm={showForm}
          setShowForm={setShowForm}
          onSubmit={setData}
          data={data}
          setKeyChange={setKeyChange}
          keyChange={keyChange}
        />
        {  <EditModal  />}
        <div className={classes.addUser}>
          <Button
            className={classes.plusIconBtn}
            icon={<PlusOutlined />}
            onClick={() => setShowForm(true)}
          />
        </div>
        <Table pagination={false} columns={columns} dataSource={data} />
        <Pagination
          style={{ marginTop: "16px", textAlign: "center" }}
          total={data.length}
          pageSize={5}
          showSizeChanger={false}
        />
      </Content>
    </Layout>
  );
}
export default User;
