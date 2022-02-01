import { Templator } from "../../../utils/templator/Templator.js";
import { blockTemplate } from "./login.tmpl.js";
import "./login.scss";

const tmpl = new Templator(blockTemplate);

const context = {};

export const loginTemplate = tmpl.compile(context);
const root = document.querySelector("#root");
