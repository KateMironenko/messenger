import { loginTemplate } from "./src/pages/Login/index.js";
import { signupTemplate } from "./src/pages/CreateAccount/index.js";
import { createChartPage } from "./src/pages/Chat/index.js";
import { createProfilePage } from "./src/pages/Profile/index.js";
import { errorTemplate } from "./src/pages/Error/index.js";
import "./src/static/fonts/stylesheet.css";
import "./src/static/styles/auth-form.scss";
import { route, template } from "./utils/router/router.js";

const root = document.querySelector("#root");

template("signup", function () {
  root.innerHTML = signupTemplate;
});

template("chat", function () {
  createChartPage(root);
});

template("profile", function () {
  createProfilePage(root);
});

template("error", function () {
  root.innerHTML = errorTemplate;
});

template("login", function () {
  root.innerHTML = loginTemplate;
});

route("/signup", "signup");
route("/chat", "chat");
route("/error", "error");
route("/profile", "profile");
route("/", "login");
