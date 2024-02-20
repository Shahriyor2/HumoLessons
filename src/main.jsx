import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { Footer } from "./components/Layout/Footer/Footer.jsx";
import { Header } from "./components/Layout/Header/Header.jsx";
import { store } from "./store/index";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <div className="container">
        <Header />
        <div className="content">
          <App />
        </div>
        <Footer />
      </div>
    </Provider>
  </Router>
);
