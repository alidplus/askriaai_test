import { useMemo, useState } from "react";
import type { MenuProps } from "antd";
import { Button, Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import {
  MenuOutlined,
  HomeOutlined,
  UserOutlined,
  ScheduleOutlined,
  ShareAltOutlined,
  FileTextOutlined,
  SnippetsOutlined,
  HeartOutlined,
  LeftOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  onClick?: () => void,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    onClick
  };
}

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate()

  const items = useMemo<MenuItem[]>(() => {
    return [
      getItem(
        "Home",
        "1",
        () => {
          navigate("/");
        },
        <HomeOutlined />
      ),
      getItem(
        "Api",
        "2",
        () => {
          navigate("/api");
        },
        <UserOutlined />
      ),
      getItem(
        "Option 3",
        "3",
        () => {
          navigate("/");
        },
        <ScheduleOutlined />
      ),
      getItem(
        "Option 4",
        "4",
        () => {
          navigate("/");
        },
        <ShareAltOutlined />
      ),
      getItem(
        "Option 5",
        "5",
        () => {
          navigate("/");
        },
        <FileTextOutlined />
      ),
      getItem(
        "Option 6",
        "6",
        () => {
          navigate("/");
        },
        <SnippetsOutlined />
      ),
      getItem(
        "Option 7",
        "7",
        () => {
          navigate("/");
        },
        <HeartOutlined />
      ),
      getItem(
        "Option 8",
        "8",
        () => {
          navigate("/");
        },
        <LeftOutlined />
      ),
    ];
  }, []);

  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        trigger={null}
        breakpoint="xs"
        collapsedWidth="50"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 9,
          boxShadow: "0px 1px 2px lightgray",
        }}
      >
        <Button
          block
          type="link"
          size="large"
          onClick={() => setCollapsed((c) => !c)}
        >
          <MenuOutlined />
        </Button>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
        <Button
          block
          type="link"
          size="large"
          onClick={() => setCollapsed((c) => !c)}
        >
          <SettingOutlined />
        </Button>
        <Button
          block
          type="link"
          size="large"
          onClick={() => setCollapsed((c) => !c)}
          style={{ border: "1px solid black" }}
        >
          Aa
        </Button>
      </Sider>
      <Layout style={{ marginLeft: 50 }}>
        <Content style={{ margin: "0 16px" }}>
          <div style={{ padding: '24px 0', minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
