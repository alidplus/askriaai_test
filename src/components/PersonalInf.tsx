import { CalendarOutlined, FlagOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import React from "react";

export const thumbnailStyle: React.CSSProperties = {
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
}

function PersonalInf() {
  return (
    <Card>
      <Typography.Title level={4} style={{ margin: '10px 0' }}>Personal Information</Typography.Title>
      <Row wrap>
        <Col span={12} style={{ margin: '16px 0' }}>
          <Space>
            <Card bodyStyle={thumbnailStyle} style={{ width: '40px', height: '40px' }}>
              <FlagOutlined />
            </Card>
            <Space direction="vertical">
              <Typography.Text type="secondary">Nationality</Typography.Text>
              <Typography.Text strong>Sri Lankan</Typography.Text>
            </Space>
          </Space>
        </Col>
        <Col span={12} style={{ margin: '16px 0' }}>
          <Space>
            <Card bodyStyle={thumbnailStyle} style={{ width: '40px', height: '40px' }}>
              <UserOutlined />
            </Card>
            <Space direction="vertical">
              <Typography.Text type="secondary">National Id</Typography.Text>
              <Typography.Text strong>000000000</Typography.Text>
            </Space>
          </Space>
        </Col>
        <Col span={12} style={{ margin: '16px 0' }}>
          <Space>
            <Card bodyStyle={thumbnailStyle} style={{ width: '40px', height: '40px' }}>
              <UserOutlined />
            </Card>
            <Space direction="vertical">
              <Typography.Text type="secondary">Gender</Typography.Text>
              <Typography.Text strong>Female</Typography.Text>
            </Space>
          </Space>
        </Col>
        <Col span={12} style={{ margin: '16px 0' }}>
          <Space>
            <Card bodyStyle={thumbnailStyle} style={{ width: '40px', height: '40px' }}>
              <CalendarOutlined />
            </Card>
            <Space direction="vertical">
              <Typography.Text type="secondary">Date of Birth</Typography.Text>
              <Typography.Text strong>00-00-0000</Typography.Text>
            </Space>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

export default PersonalInf;
