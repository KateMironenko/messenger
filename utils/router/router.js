let routes = {};
let templates = {};

export function route(path, template) {
  if (typeof template === "function") {
    return (routes[path] = template);
  } else if (typeof template === "string") {
    return (routes[path] = templates[template]);
  } else {
    return;
  }
}

export function template(name, templateFunction) {
  return (templates[name] = templateFunction);
}

function resolveRoute(route) {
  try {
    if (routes[route] === undefined) {
      throw new Error();
    }
    return routes[route];
  } catch (e) {
    throw new Error(`Route ${route} not found`);
  }
}

function router(evt) {
  let url = window.location.hash.slice(1) || "/";
  let currentRouter = resolveRoute(url);
  currentRouter();
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
