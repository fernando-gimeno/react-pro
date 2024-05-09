import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { About, Home, Users } from "../pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));
const HomePage = lazy(() => import("../01-lazyload/pages/Home"));
const AboutPage = lazy(() => import("../01-lazyload/pages/About"));
const UsersPage = lazy(() => import("../01-lazyload/pages/Users"));

export const routes: Route[] = [
  {
    to: "/lazyload",
    path: "/lazyload/*",
    component: LazyLayout,
    name: "LazyLayout",
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
  {
    to: "/no-lazy",
    path: "no-lazy",
    component: NoLazy,
    name: "No Lazy",
  },
];
