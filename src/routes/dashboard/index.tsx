import { RouteObject } from "react-router-dom"
import ErrorBoundary from "@/components/layout/ErrorBoundary"

function Dashboard () {
  return (
    <div>Dashboard</div>
  )
}

const route: RouteObject = {
  path: "",
  Component: Dashboard,
  ErrorBoundary
}

export default route