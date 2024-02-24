// import { SettingOutlined } from "@ant-design/icons";
// import { Menu } from "antd";
// import { useState } from "react";

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem("Settings", "sub1", <SettingOutlined />, [
//     getItem("Option 9", "9"),
//     getItem("Option 10", "10"),
//     getItem("Option 11", "11"),
//     getItem("Option 12", "12"),
//   ]),
// ];

// const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

// function MenuList({ selectedKey }) {
//   const [openKeys, setOpenKeys] = useState(["sub1"]);
//   const onOpenChange = (keys) => {
//     const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
//     if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//       setOpenKeys(keys);
//     } else {
//       setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
//     }
//   };

//   return (
//     <Menu
//       mode="inline"
//       theme="dark"
//       color="white"
//       openKeys={openKeys}
//       onOpenChange={onOpenChange}
//       items={items}
//       setSelectedKey={selectedKey}
//     />
//   );
// }

// export { MenuList };

import { FileOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Settings", "sub2", <SettingOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
];

function MenuList({ selectedKey }) {
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[selectedKey]}
      setSelectedKey={selectedKey}
      mode="inline"
      items={items}
    />
  );
}

export { MenuList };
