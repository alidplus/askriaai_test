import { RouteObject } from "react-router-dom"
import Dashboard from "./dashboard"
import StopLight from "./api"
import Layout from "@/components/layout"
import ErrorBoundary from "@/components/layout/ErrorBoundary"


const route: RouteObject = {
  path: "",
  Component: Layout,
  // action,
  children: [
    Dashboard,
    StopLight
  ],
  ErrorBoundary
}

export default route