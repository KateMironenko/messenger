import Block from '../../modules/block/Block';
import {blockTemplate} from './message.tmpl';

export default class Message extends Block {
  constructor(props: {}) {
    super(props, 'div');
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
