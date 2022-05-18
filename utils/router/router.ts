import Route from "../router/route";
class Router {
  static __instance: any;
  public routes: Array<Route>;
  public history: any;
  public _currentRoute: any | null;
  public _rootQuery: string;
  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }
    Router.__instance = this;
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
  }

  use(pathname: string, block: any) {
    const route: Route = new Route(pathname, block, {
      rootQuery: this._rootQuery,
    });

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event: any) => {
      this._onRoute(event.currentTarget?.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default Router;
