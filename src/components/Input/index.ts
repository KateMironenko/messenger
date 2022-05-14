import "./input.scss";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./input.tmpl";

type InputProps = {
  inputContainerClass: string;
  inputClass: string;
  inputId: string;
  inputName: string;
  inputType: string;
  inputPlaceholder: string;
  inputLabel: string;
  validations: RegExp;
  valid: boolean;
  value: string;
  inputDisabled?: string;
};
export default class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super("div", props);
    this.setProps({
      inputInvalidClass: "",
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

    if (!this.props.validations.test(value)) {
      this._showError(value);
      return;
    }

    this._hideError(value);

    this.setProps({
      value: value,
    });
  }

  _onBlur(event: Event): void {
    const input = event.target as HTMLInputElement;

    const { value }: { value: string } = input;

    if (!this.props.validations.test(value)) {
      this._showError(value);
      return;
    }

    this._hideError(value);

    this.setProps({
      value: value,
    });
  }

  _showError(value: string): void {
    this.setProps({
      valid: false,
      value: value,
      inputInvalidClass: "invalid-input",
    });
  }

  _hideError(value: string): void {
    this.setProps({
      valid: true,
      value: value,
      inputInvalidClass: "",
    });
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
