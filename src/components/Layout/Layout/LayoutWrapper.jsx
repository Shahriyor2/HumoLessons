import { Layout } from "antd";
import { Header } from "../Header/Header";

const LayoutWrapper = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
    </Layout>
  );
};

export default LayoutWrapper;
