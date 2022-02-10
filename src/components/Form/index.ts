import "./form.scss";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./form.tmpl";
import Button from "../../components/Button/index";
import Input from "../../components/Input/index";
import { validate } from "../../../utils/mydash/validation";

export default class Form extends Block {
  data: any;
  constructor(props: {} | undefined) {
    super("div", props);
    this.data = {};
  }

  render() {
    this.children.inputs = this.props.inputs.map(
      (inputProps: any, index: number) => {
        const input: Input = new Input({
          inputContainerClass: inputProps.inputContainerClass,
          inputClass: inputProps.inputClass,
          inputId: inputProps.inputId,
          inputName: inputProps.inputName,
          inputType: inputProps.inputType,
          inputPlaceholder: inputProps.inputPlaceholder,
          inputLabel: inputProps.inputLabel,
          valid: false,
          events: {
            focusout: (event: Event) => {
              this._onFocus(index, event);
            },
            blur: (event: Event) => {
              this._onFocus(index, event);
            },
          },
        });
        return input;
      }
    );

    this.children.button = new Button({
      className: this.props.className,
      btnName: this.props.btnName,
      events: {
        click: (event: Event) => {
          event.preventDefault();
          this._onSend();
        },
      },
    });
    return this.compile(blockTemplate, {
      formClass: this.props.formClass,
      button: this.children.button,
      inputs: this.children.inputs,
    });
  }

  _onFocus(index: number, event: Event): void {
    const input: EventTarget | null = event.target;

    const { name, value }: any = input;

    if (!this.validate(name, value)) {
      this._showError(index, value);
      return;
    }

    this._hideError(index, value);

    this.children.inputs[index].setProps({
      value: value,
    });

    this.data[name] = value;
  }

  validate(name: string, value: string) {
    return validate(name, value);
  }

  _onSend():void {
    if (
      !this.children.inputs.some(function (el: any) {
        return !el.props.valid;
      })
    ) {
      console.log(this.data);
    }
  }

  _showError(index: number, value: string): void {
    this.children.inputs[index].setProps({
      valid: false,
      value: value,
      inputInvalidClass: "invalid-input",
    });
  }

  _hideError(index: number, value: string): void {
    this.children.inputs[index].setProps({
      valid: true,
      value: value,
      inputInvalidClass: "",
    });
  }
}
