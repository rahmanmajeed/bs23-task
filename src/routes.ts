import { ReactNode } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Task from "./pages/Task";

export interface IRoute {
  id: number;
  name?: string;
  slug: string;
  path: string;
  component?: any;
}

const routes: IRoute[] = [
  {
    id: 1,
    name: "Login",
    slug: "login",
    path: "/",
    component: Login,
  },
  {
    id: 2,
    name: "Dashboard",
    slug: "dashboard",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    id: 3,
    name: "Task",
    slug: "tasks",
    path: "/tasks",
    component: Task,
  },
  {
    id: 4,
    name: "Members",
    slug: "members",
    path: "/members",
    component: Member,
  },
];

export default routes;
