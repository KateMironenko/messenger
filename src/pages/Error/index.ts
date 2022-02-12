import { blockTemplate } from "./error.tmpl";
import "./error.scss";
import Block from "../../modules/block/Block";

type ErrorProps = {}
class Error extends Block <ErrorProps> {
  constructor(props: ErrorProps) {
    super("div", props);
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
export const error = new Error({
  errorCode: "404",
  errorText: "Page not found",
});

