import EventBus from "../eventBus/EventBus";
import { Templator } from "../../../utils/templator/Templator";
import { v4 as makeUUID } from "uuid";

// Нельзя создавать экземпляр данного класса
class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
  };

  _element: any | null = null;
  _meta: unknown | null = null;
  props;
  eventBus;
  children;
  _id = null;
  tagName: string;

  constructor(tagName: string = "div", propsAndChildren = {}) {
    const { children, props }: { [key: string]: any } =
      this._getChildren(propsAndChildren);

    this.children = children;
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };
    this._id = makeUUID();

    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _getChildren(propsAndChildren: {}): {} {
    const children: any = {};
    const props: any = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  public getContent(): Record<string, any> {
    return this.element;
  }

  public compile(template: string, props: any) {
    const propsAndStubs = { ...props };


    Object.entries(this.children).forEach(([key, child]: Array<any>) => {
      if (Object.prototype.toString.call(child) === "[object Array]") {
        propsAndStubs[key] = [];
        child.forEach((element, index) => {
          propsAndStubs[key].push(`<div data-id="${element._id}"></div>`);
        });
      } else {
        // child._id = makeUUID();
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
      }
    });

    const fragment: any = this._createDocumentElement("template");

    const tmpl: Templator = new Templator(template);

    let hh = tmpl.compile(propsAndStubs);

      fragment.innerHTML = tmpl.compile(propsAndStubs);

    Object.values(this.children).forEach((child: any) => {
      if (Object.prototype.toString.call(child) === "[object Array]") {
        child.forEach((element) => {

          const stub = fragment.content.querySelector(
            `[data-id="${element._id}"]`
          );

          stub.replaceWith(element.getContent());
        });
      } else {
        const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

        stub.replaceWith(child.getContent());
      }
    });

    return fragment.content;
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
    this._element.setAttribute("data-id", this._id);
  }

  public init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child: any) => {
      if (Object.prototype.toString.call(child) === "[object Array]") {
        child.forEach((element, index) => {
          element.dispatchComponentDidMount();
        });
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  public componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate() {
    this.componentDidUpdate();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  public componentDidUpdate() {}

  public setProps = (nextProps: unknown) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  public get element() {
    return this._element;
  }

  private _render() {
    const block = this.render();
    this._removeEvents();
    this._element.innerHTML = "";

    this._element.appendChild(block);

    this._addEvents();
  }

  public render() {}

  private _addEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  private _removeEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  private _makePropsProxy(props: any) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target });
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  private _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  public show() {
    this.getContent().style.display = "block";
  }

  public hide() {
    this.getContent().style.display = "none";
  }
}

export default Block;
