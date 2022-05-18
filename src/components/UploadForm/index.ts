import './form.scss';
import Block from '../../modules/block/Block';
import {blockTemplate} from './form.tmpl';
import Button from '../../components/Button/index';
import Input from '../../components/UploadInput/index';

type FormProps = {
  btnName: string;
  className: string;
  inputName: string;
  type: string;
  formClass: string;
  onSubmit: Function;
  inputId: string;
};
export default class Form extends Block<FormProps> {
  formSubmitData: Record<string, string>;

  _onSubmit: Function;

  constructor(props: FormProps) {
    super(props, 'div');
    this.formSubmitData = {};
    this._onSubmit = this.props.onSubmit;
  }

  render() {
    this.children.input = new Input({
      inputName: this.props.inputName,
      inputId: this.props.inputId
    });

    this.children.button = new Button({
      className: this.props.className,
      btnName: this.props.btnName,
      type: this.props.type,
      events: {
        click: (event: Event) => {
          event.preventDefault();
          this._onSend();
        }
      }
    });
    return this.compile(blockTemplate, {
      formClass: this.props.formClass,
      button: this.children.button,
      inputs: this.children.input
    });
  }

  _onSend(): void {
    const form = new FormData();
    const input: any = document.getElementById(this.props.inputId);

    if (input !== null) {
      const avatar = input!.files[0];

      if (avatar) {
        form.append('avatar', avatar);
        this._onSubmit(form);
      }
    }
  }
}
