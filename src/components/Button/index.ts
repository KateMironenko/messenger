import './button.scss';
import Block from '../../modules/block/Block';
import {blockTemplate} from './button.tmpl';

export default class Button extends Block {
  constructor(props: {}) {
    super(props, 'div');
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
