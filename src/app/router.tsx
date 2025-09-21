import { Router, RootRoute, Route } from "@tanstack/react-router";
import Root from "@/defaultLayout/__root";
import Home from "../features/home/routes";
import Login from "../features/auth/routes/login";
import Register from "../features/auth/routes/register";

const rootRoute = new RootRoute({ component: Root });

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
