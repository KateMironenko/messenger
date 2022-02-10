let routes: any | undefined = {};
let templates: any | undefined = {};

export function route(path: string, template: string): null | any {
  if (typeof template === "function") {
    return (routes[path] = template);
  } else if (typeof template === "string") {
    return (routes[path] = templates[template]);
  } else {
    return;
  }
}

export function template(name: string, templateFunction: ()=> void): any {
  return (templates[name] = templateFunction);
}

function resolveRoute(route: string): any | Error {
  try {
    if (routes[route] === undefined) {
      throw new Error();
    }
    return routes[route];
  } catch (e) {
    throw new Error(`Route ${route} not found`);
  }
}

function router(): void {
  let url = window.location.hash.slice(1) || "/";
  let currentRouter = resolveRoute(url);
  currentRouter();
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
