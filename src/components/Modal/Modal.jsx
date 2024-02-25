import { Button, Modal } from "antd";

function EditModal({ showEditModal, setShowModalEdit, editArr }) {
  const handleCancel = () => {
    setShowModalEdit(false);
  };

  return (
    <Modal
      align="center"
      title="Edit Modal"
      visible={showEditModal}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
      ]}
    >
      <section style={{ textAlign: "center" }}>
        {editArr.map((item) => {
          return (
            <div key={item.key}>
              <h1>{item.name}</h1>
              <p>{item.age}</p>
              <p>{item.address}</p>
            </div>
          );
        })}
      </section>
    </Modal>
  );
}

export { EditModal };
