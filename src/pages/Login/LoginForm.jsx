import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeInput } from "../../store/LoginReducer/LoginReducer";
import { LoginLogik } from "./LoginLogik";
import style from "./login.module.scss";
import { Flex } from "../../components/Ui/Flex/Flex";

export const LoginForm = () => {
  const { handleSubmit, handleOnChange, loadings } = LoginLogik();

  const { userName, password } = useSelector((state) => state.login.userData);
  const dispatch = useDispatch();

  return (
    <Flex minHeight="100vh">
      <section className={style.contentBox}>
        <div className={style.userName}>
          <h1>Вход</h1>

          <Input
            name="userName"
            type="text"
            value={userName}
            placeholder="Номер телефона/email"
            onChange={handleOnChange}
          />
          {userName.length > 0 && userName.length < 5 && (
            <p>не менее 5 символов</p>
          )}
        </div>

        <div className={style.password}>
          <h1>Пароль</h1>
          <Input
            name="password"
            type="password"
            value={password}
            placeholder="Пароль..."
            onChange={handleOnChange}
          />
          {password.length > 0 && password.length < 3 && (
            <p> не менее 3 символов</p>
          )}
        </div>

        <Button
          className={style.logBtn}
          disabled={password.length < 3 || userName.length < 5}
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings}
          onClick={handleSubmit}
        >
          Вход
        </Button>

        <div
          className={style.autoBlockText}
          onClick={() => dispatch(handleChangeInput())}
        >
          <p>
            Имя поьзователя:
            <span>mor_2314</span>
          </p>
          <p>
            Пароль:
            <span>83r5^_</span>
          </p>
        </div>
      </section>
    </Flex>
  );
};
