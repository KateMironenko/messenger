import "./button.scss";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./button.tmpl";

type ButtonProps = {};
export default class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super("div", props);
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
