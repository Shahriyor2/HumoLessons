import { Button, Form, Input, InputNumber } from "antd";
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

const onFinish = (values) => {
  console.log(values);
};

export const AddDataForm = ({ showForm, setShowForm }) => (
  <div
    className={`${classes.overlay} ${showForm ? classes.overlayVisible : ""}`}
  >
    <div className={classes.protDrawer}>
      <Form
        className={classes.overlayForm}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
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
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "address"]}
          label="Address"
          rules={[
            {
              type: "text",
            },
          ]}
        >
          <InputNumber style={{ width: "165px" }} />
        </Form.Item>
        <Form.Item name={["user", "Tags"]} label="Tags">
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <div className={classes.ovarlayBtns}>
            <Button onClick={() => setShowForm(false)}>Back</Button>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  </div>
);
