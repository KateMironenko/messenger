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
export const error = new Error({
  errorCode: '404',
  errorText: 'Page not found'
});
