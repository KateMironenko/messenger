import { login } from "./src/pages/Login/index";
import { signup } from "./src/pages/CreateAccount/index";
import Messenger from "./src/pages/Messenger/index";
import Profile from "./src/pages/Profile/index";
import { error } from "./src/pages/Error/index";
import "./src/static/fonts/stylesheet.css";
import "./src/static/styles/auth-form.scss";
import Router from "./utils/router/router";

const router = new Router("#root");

router
  .use("/", login)
  .use("/signup", signup)
  .use("/settings", new Profile({}))
  .use("/messenger", new Messenger({}))
  .use("/error", error)
  .start();
