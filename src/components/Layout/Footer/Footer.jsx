import { Layout } from "antd";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <Layout.Footer className={classes.layoutFooter}>
      Humo ©{new Date().getFullYear()} Created by Ant UED
    </Layout.Footer>
  );
};

export { Footer };
