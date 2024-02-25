import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Pagination, Space, Table, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditModal } from "../../components/Modal/Modal";
import { AddDataForm } from "../../components/Ui/AddDataForm/AddDataForm";
import {
  handleClickDelete,
  handlePageChange,
} from "../../store/headerAddSlice/headerAddSlice";
import classes from "./user.module.scss";

function User() {
  const [showEditModal, setShowModalEdit] = useState(false);
  const [editArr, setEditArr] = useState([]);
  const { keyChange, data, pagination } = useSelector((state) => state.addUser);
  // const [pagination, setPagination] = useState({
  //   current: 5,
  //   pageSize: 5,
  //   total: data.length,
  // });
  const dispatch = useDispatch();

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
      render: (record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>

          {/* кнопка удаления */}
          <Button
            onClick={() => dispatch(handleClickDelete(record.key))}
            icon={<DeleteOutlined />}
          />
          {/* кнопка edit */}
          <Button
            onClick={() => handleClickEdit(record.key)}
            icon={<EditOutlined />}
          />
        </Space>
      ),
    },
  ];

  const handleClickEdit = (key) => {
    const findkey = data.find((item) => item.key === key);
    setShowModalEdit(true);

    if (findkey) {
      setEditArr([findkey]);
    }
  };

  return (
    <div className={classes.contentBox}>
      {/* добавление пользователя */}
      <AddDataForm key={keyChange ? "showForm" : "hideForm"} />
      {/* модалка */}
      <EditModal
        editArr={editArr}
        showEditModal={showEditModal}
        setShowModalEdit={setShowModalEdit}
      />

      {/* список всех участников */}
      <Table
        // pagination={pagination.pageSize > 5 ? pagination : true}
        pagination={pagination}
        total={pagination.total}
        pageSize={pagination.pageSize}
        current={pagination.current}
        defaultCurrent={1}
        columns={columns}
        dataSource={data}
      />

      {/* пагинация */}
      {/* <Pagination
        className={classes.pagination}
        total={pagination.total}
        pageSize={pagination.pageSize}
        current={pagination.current}
        defaultCurrent={1}
        onChange={handlePageChange}
        // showSizeChanger={false}
        // появляется поля инпута для выбора страницы
        // simple={true}
      /> */}
    </div>
  );
}
export default User;
