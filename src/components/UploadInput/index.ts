import {blockTemplate} from './upload.tmpl';
import Block from '../../modules/block/Block';
import attachImg from '../../static/images/attach-icon.svg';

export default class UploadInput extends Block {
  constructor(props: {}) {
    super(props, 'div');
    this.setProps({
      attachImg,
      events: {
        focusout: (event: Event) => {
          this._onFocus(event);
        },
        blur: (event: Event) => {
          this._onBlur(event);
        }
      }
    });
  }

  _onFocus(event: Event): void {
    const input = event.target as HTMLInputElement;

    const {value}: { value: string } = input;

    this.setProps({
      value
    });
  }

  _onBlur(event: Event): void {
    const input = event.target as HTMLInputElement;

    const {value}: { value: string } = input;

    this.setProps({
      value
    });
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
