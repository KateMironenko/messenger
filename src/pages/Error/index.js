import { Templator } from "../../../utils/templator/Templator.js";
import { blockTemplate } from "./error.tmpl.js";
import "./error.scss";

const tmpl = new Templator(blockTemplate);

const context = {
  errorCode: "404",
  errorText: "Page not found",
};

export const errorTemplate = tmpl.compile(context);
