import { RouteObject } from "react-router-dom"
import ErrorBoundary from "@/components/layout/ErrorBoundary"
import { Button, Space, DatePicker, version } from 'antd';
function Dashboard () {
  return (
    <div style={{ padding: '0 24px' }}>
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
    </div>
  )
}

const route: RouteObject = {
  path: "",
  Component: Dashboard,
  ErrorBoundary
}

export default route