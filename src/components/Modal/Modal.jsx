import { Button, Modal } from "antd";
import { useState } from "react";

function EditModal({
  showEditModal,
  setShowModalEdit,
  editArr,
  setData,
  data,
}) {
  const handleCancel = () => {
    setShowModalEdit(false);
  };

  const [editedData, setEditedData] = useState({});

  const handleChangeInput = (event) => {
    const { key, value } = event.target;
    setEditedData({ ...editedData, [key]: value });
  };

  const handleSubmit = () => {
    setData([editedData]);
    setShowModalEdit(false);
  };

  return (
    <Modal
      title="Edit Modal"
      visible={showEditModal}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      {editArr.map((item) => {
        return (
          <div key={item.key}>
            <h1>{item.name}</h1>
            <p>{item.age}</p>
            <p>{item.address}</p>
            <input
              key={`key_${item.key}`}
              name={item.name}
              value={item.name}
              onChange={handleChangeInput}
            />
          </div>
        );
      })}
    </Modal>
  );
}

export { EditModal };
