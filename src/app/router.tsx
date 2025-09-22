import {createRootRoute, createRoute, createRouter, redirect} from "@tanstack/react-router";
import Root from "@/defaultLayout/__root";
import Home from "../features/home/routes";
import Login from "../features/auth/routes/login";
import Register from "../features/auth/routes/register";
import Dashboard from "@/features/dashboard/routes/dashboard.tsx";
import {ProtectedLayout} from "@/app/protected-layout.tsx";
import {authService} from "@/features/auth/services/authService.ts";

const rootRoute = createRootRoute({component: Root});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});

const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "protected",
  component: ProtectedLayout,
  beforeLoad: () => {
    if (!authService.isAuthenticated()) {
      throw redirect({
        to: "/login",
      });
    }
  }
});
const dashboardRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: "/dashboard",
  component: Dashboard,
});
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  protectedRoute.addChildren([dashboardRoute])
]);

export const router = createRouter({
  routeTree, context: {
    auth: authService
  }
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
