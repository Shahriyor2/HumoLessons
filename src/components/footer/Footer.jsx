import style from "./footer.module.css";
export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={style.footerBox}>
      <h1>Humo {year}</h1>
    </div>
  );
};
