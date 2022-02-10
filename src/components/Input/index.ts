import "./input.scss";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./input.tmpl";

export default class Input extends Block {
  value:string
  constructor(props: {} | undefined) {
    super("div", props);
    this.setProps({
      value: '',
      inputInvalidClass: ''
    })
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
