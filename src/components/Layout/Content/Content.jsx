import { Layout } from "antd";
import { Outlet } from "react-router";

function Content() {
  return (
    <Layout.Content>
      <Outlet />
    </Layout.Content>
  );
}

export { Content };
