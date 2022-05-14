import Block from "../../src/modules/block/Block";
import { render } from "../mydash/render";

function isEqual(lhs: any, rhs: any) {
  return lhs === rhs;
}

class Route {
  public _pathname: string;
  public _blockClass: any;
  public _block: Block<any> | null;
  public _props: any;

  constructor(pathname: string, view: any, props: any) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = this._blockClass;
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}

export default Route;
