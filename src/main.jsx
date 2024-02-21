// index.jsx
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesList } from "./routes/RoutesList.jsx";
import { store } from "./store/index";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <RoutesList />
      {/* <App /> */}
    </Provider>
  </Router>
);
