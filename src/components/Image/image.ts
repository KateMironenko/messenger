import "./image.scss";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./image.tmpl";

type ImageProps = {};
 class Image extends Block<ImageProps> {
  constructor(props: ImageProps) {
    super("div", props);
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}

export default new Image({})
