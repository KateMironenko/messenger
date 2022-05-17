import Block from "../../modules/block/Block";
import { blockTemplate } from "./form.tmpl";
import Button from "../../components/Button/index";
import Input from "../../components/Input/index";

type FormProps = {
  inputs: {
    inputContainerClass: string;
    inputClass: string;
    inputId: string;
    inputName: string;
    inputType: string;
    inputPlaceholder: string;
    inputLabel: string;
    value?: string;
    valid?: Boolean;
    validations?: RegExp;
    inputDisabled?: string;
  }[];
  btnName: string;
  className: string;
  type: string;
  name: string;
  formClass: string;
  onSubmit: Function;
};
export default class Form extends Block<FormProps> {
  formSubmitData: Record<string, string>;
  _onSubmit: Function;
  constructor(props: FormProps) {
    super("div", props);
    this.formSubmitData = {};
    this._onSubmit = this.props.onSubmit;
  }

  render() {
    this.children.inputs = this.props.inputs.map((inputProps: any) => {
      const input: Input = new Input({
        inputContainerClass: inputProps.inputContainerClass,
        inputClass: inputProps.inputClass,
        inputId: inputProps.inputId,
        inputName: inputProps.inputName,
        inputType: inputProps.inputType,
        inputPlaceholder: inputProps.inputPlaceholder,
        inputLabel: inputProps.inputLabel,
        validations: inputProps.validations,
        valid: inputProps.value ? true : false,
        value: inputProps.value,
        inputDisabled: inputProps.inputDisabled,
      });
      return input;
    });

    this.children.button = new Button({
      className: this.props.className,
      btnName: this.props.btnName,
      type: this.props.type,
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

  _onSend(): void {
    if (
      !this.children.inputs.some(function (el: any) {
        return !el.props.valid;
      })
    ) {
      this.children.inputs.forEach((element: any) => {
        this.formSubmitData[element.props.inputName] =
          element.props.value.replace(
            /[&<>'"]/g,
            (tag: string) =>
              ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;",
              }[tag] || tag)
          );
      });
      this._onSubmit(this.formSubmitData);
    }
  }
}
