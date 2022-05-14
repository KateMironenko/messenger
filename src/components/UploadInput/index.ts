import "./upload.tmpl";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./upload.tmpl";
import attachImg from "../../static/images/attach-icon.svg";
export default class UploadInput extends Block{
  constructor(props: {}) {
    super("div", props);
    this.setProps({
      attachImg: attachImg,
      events: {
        focusout: (event: Event) => {
          this._onFocus(event);
        },
        blur: (event: Event) => {
          this._onBlur(event);
        },
      },
    });
  }

  _onFocus(event: Event): void {
    const input = event.target as HTMLInputElement;

    const { value }: { value: string } = input;

    this.setProps({
      value: value,
    });
  }

  _onBlur(event: Event): void {
    const input = event.target as HTMLInputElement;

    const { value }: { value: string } = input;

    this.setProps({
      value: value,
    });
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
