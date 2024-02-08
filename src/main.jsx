import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/header/Header.jsx";
import { Footer } from "./components/footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <App />
    <Footer />
  </Router>
);
