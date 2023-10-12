import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  let error = useRouteError();
  // console.error(error);
  return <div style={{ color: 'red' }}>Something went wrong!</div>;
}