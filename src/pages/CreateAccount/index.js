import { Templator } from "../../../utils/templator/Templator.js";
import { blockTemplate } from "./createAccount.tmpl.js";
import "./createAccount.scss";

const tmpl = new Templator(blockTemplate);

const context = {};

export const signupTemplate = tmpl.compile(context);