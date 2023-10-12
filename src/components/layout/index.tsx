import { useMemo, useState } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Button, Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  MenuOutlined,
  HomeOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

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
      getItem('Option 1', '1', () => { navigate('/') }, <HomeOutlined />),
      getItem('Option 2', '2', () => { navigate('/test') }, <UnorderedListOutlined />),
    ];
  }, [])

  return (
    <Layout hasSider style={{ minHeight: '100vh' }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        trigger={null}
        breakpoint="xs"
        collapsedWidth="50"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 9,
          boxShadow: '0px 1px 2px lightgray'
        }}
      >
        <Button block type="link" size="large" onClick={() => setCollapsed(c => !c)}>
          <MenuOutlined />
        </Button>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout style={{ marginLeft: 50 }}>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
