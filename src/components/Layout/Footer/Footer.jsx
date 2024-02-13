import style from "./footer.module.scss";
import { useSelector } from "react-redux";

export const Footer = () => {
  const getFullYear = new Date().getFullYear();

  const { authenticated } = useSelector((state) => state.user);
  const backgroundStyle = authenticated
    ? { background: "rgb(226, 111, 50)" }
    : { background: "gray" };
  return (
    <div style={backgroundStyle} className={style.footerBox}>
      <h1 className={style.title}>Humo {getFullYear}</h1>
    </div>
  );
};
