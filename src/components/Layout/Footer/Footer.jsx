import { Layout } from "antd";

const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      Humo ©{new Date().getFullYear()} Created by Ant UED
    </Layout.Footer>
  );
};

export { Footer };
