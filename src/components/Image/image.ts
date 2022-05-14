import Block from "../../modules/block/Block";
import { blockTemplate } from "./image.tmpl";

class Image extends Block {
  constructor(props: {}) {
    super("div", props);
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}

export default new Image({});
