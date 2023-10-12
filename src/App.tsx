import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { ConfigProvider, ThemeConfig } from "antd"
// import ApiSpecs from './assets/ApplicationForm.yaml'

const myTheme: ThemeConfig = {
  // algorithm: theme.compactAlgorithm,
  token: {
    "colorPrimary": "#1d5ecd",
    "colorInfo": "#D0F7FA",
    "colorLink": "#1d4ed8",
    "colorSuccess": "#037092",
    "colorError": "#fc402b"
  }
}


export default function JoyOrderDashboardTemplate() {
  return (
    <ConfigProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

