import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setKeyChange,
  setShowForm,
} from "../../../store/headerAddSlice/headerAddSlice";
import classes from "./adduser.module.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

export const AddDataForm = () => {
  const dispatch = useDispatch();
  const { showFrom, data } = useSelector((state) => state.addUser);
  const { keyChange } = useSelector((state) => state.addUser);
  const [dataForm, setDataForm] = useState({
    name: "",
    age: "",
    address: "",
    tags: [],
  });

  const onAdd = () => {
    const newDataToUser = {
      key: (data.length + 1).toString(),
      ...dataForm,
    };

    dispatch(setData(newDataToUser));
    dispatch(setShowForm(false));
    dispatch(setKeyChange(!keyChange));
  };

  const changeInputs = (event) => {
    const { name, value } = event.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setDataForm((prev) => ({ ...prev, tags: value }));
  };

  return (
    <div
      className={`${classes.overlay} ${showFrom ? classes.overlayVisible : ""}`}
    >
      <div className={classes.protDrawer}>
        <Form
          className={classes.overlayForm}
          {...layout}
          name="nest-messages"
          onFinish={onAdd}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "Name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input name="name" value={dataForm.name} onChange={changeInputs} />
          </Form.Item>
          <Form.Item name={["age"]} label="Age">
            <Input
              name="age"
              style={{ width: "175px" }}
              value={dataForm.age}
              onChange={changeInputs}
            />
          </Form.Item>

          <Form.Item name={["address"]} label="Address">
            <Input
              name="address"
              value={dataForm.address}
              onChange={changeInputs}
            />
          </Form.Item>
          <Form.Item label="Select" style={{ width: "225px" }}>
            <Select
              mode="multiple"
              value={dataForm.tags}
              onChange={handleSelectChange}
            >
              <Select.Option value="nice">nice</Select.Option>
              <Select.Option value="developer">developer</Select.Option>
              <Select.Option value="loser">loser</Select.Option>
              <Select.Option value="cool">cool</Select.Option>
              <Select.Option value="teacher">teacher</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <div className={classes.ovarlayBtns}>
              <Button onClick={() => dispatch(setShowForm(false))}>Back</Button>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
