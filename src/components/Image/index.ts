import Block from '../../modules/block/Block';
import {blockTemplate} from './image.tmpl';

class Image extends Block {
  constructor(props: {}) {
    super(props, 'div');
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}

export default Image;
