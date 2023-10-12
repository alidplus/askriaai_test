import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { ConfigProvider, theme } from "antd"

export default function JoyOrderDashboardTemplate() {
  return (
    <ConfigProvider
      theme={{
        // algorithm: theme.compactAlgorithm,
        token: {
          "colorPrimary": "#1d5ecd",
          "colorInfo": "#1d5ecd",
          "colorLink": "#1d4ed8",
          "colorSuccess": "#037092",
          "colorError": "#fc402b"
        }
      }}
    >
    <RouterProvider router={router} />
  </ConfigProvider>
  )
}

