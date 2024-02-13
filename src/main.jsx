import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Layout/Header/Header.jsx";
import { Footer } from "./components/Layout/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/index";

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
