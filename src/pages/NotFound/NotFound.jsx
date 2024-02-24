import { useNavigate } from "react-router";
import style from "./notfound.module.scss";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleToBackClick = () => {
    navigate("/user");
  };
  return (
    <header className={style.notFound}>
      <h1 onClick={() => handleToBackClick()}>
        Go back to Main page :{"("} <br /> Pleaze Log out
      </h1>
    </header>
  );
};
