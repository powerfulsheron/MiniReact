import { Router, Route } from "./lib/react-routing.js";

// Creation du routeur
export var router = new Router("mainRouter", [
  new Route("Home", "home", "/", "link color-red"),
  new Route("Score", "score", "/score", "link color-green"),
  new Route("File", "file", "/file", "link color-blue"),
  new Route("JitterClick", "jitterclick", "/jitterclick", "link color-yellow")
]);

// Prend la route courrante
export var route = router.routes.filter(function(r) {
  return r.getPath() === window.location.pathname;
})[0];
