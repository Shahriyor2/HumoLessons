import { Layout } from "antd";
import { Header } from "../Header/Header";
import classes from "./layout.module.scss";

const LayoutWrapper = () => {
  return (
    <Layout className={classes.layoutWrapper}>
      <Header />
    </Layout>
  );
};

export default LayoutWrapper;
