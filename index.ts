import { login } from "./src/pages/Login/index";
import { signup } from "./src/pages/CreateAccount/index";
import { chat } from "./src/pages/Chat/index";
import { profile } from "./src/pages/Profile/index";
import { error } from "./src/pages/Error/index";
import "./src/static/fonts/stylesheet.css";
import "./src/static/styles/auth-form.scss";
import { route, template } from "./utils/router/router";
import { render } from "./utils/mydash/render";

template("signup", function () {
  render("#root", signup);
});

template("chat", function () {
  render("#root", chat);
});

template("profile", function () {
  render("#root", profile);
});

template("error", function () {
  render("#root", error);
});

template("login", function () {
  render("#root", login);
});

route("/signup", "signup");
route("/chat", "chat");
route("/error", "error");
route("/profile", "profile");
route("/", "login");
