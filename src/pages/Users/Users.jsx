import { useState } from "react";
import { UsersView } from "./UsersView";

const Users = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return <UsersView isVisible={isVisible} handleToggle={handleToggle} />;
};

export default Users;
