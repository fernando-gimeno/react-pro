import { lazy, LazyExoticComponent } from "react";
// import { About, Home, Users } from "../pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const HomePage = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/About"));
const UsersPage = lazy(() => import("../pages/Users"));

export const routes: Route[] = [
  {
    to: "/home",
    path: "home",
    component: HomePage,
    name: "Home",
  },
  {
    to: "/about",
    path: "about",
    component: AboutPage,
    name: "About",
  },
  {
    to: "/users",
    path: "users",
    component: UsersPage,
    name: "Users",
  },
];
