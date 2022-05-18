import {blockTemplate} from './error.tmpl';
import './error.scss';
import Block from '../../modules/block/Block';

class Error extends Block {
  constructor(props: {}) {
    super(props, 'div');
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
export default Error;
