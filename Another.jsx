// const {
//   data: { token },
// } = await axios.post(`${baseUrl}login`, auth);

// const initialState = {
//   login: "",
//   password: "",
// };

// auth['login']

import { Icon } from "antd"; // Предположим, что вы используете Ant Design

// Компонент HumoIcon, который будет использоваться внутри компонента IHumo
const HumoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 7V5H9v2h2zm2 0h2V5h-2v2zm-4 0H7V5h2v2zm-4 0H3V5h2v2zm-2 4h2v6H1v-6h2zm18 6v-6h2v6h-2zm-4 0v-6h2v6h-2zm-4 0v-6h2v6h-2zm-4 0V11h2v6H5zm14-8h2v6h-2V7zm0-4v2h2V3h-2zM5 3v2h2V3H5zm14 10v-2h2v2h-2zm0-6v-2h2v2h-2zm0 4v-2h2v2h-2zm-8 6V7H7v10h4zm0-12V3H7v2h4zm0 4V7H7v2h4zm0 4v-2H7v2h4zm-2 6h2v2h-2v-2zm-4 0h2v2H5v-2zm10 0h2v2h-2v-2z" />
  </svg>
);

const IHumo = () => {
  <Icon element={HumoIcon} />;
};

export default IHumo;
