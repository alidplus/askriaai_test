import { CloudDownloadOutlined, EyeOutlined, FileProtectOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Flex, List, Row, Space, Typography } from "antd";
import { thumbnailStyle } from "./PersonalInf";

const DEV_emptyResumeStyle: React.CSSProperties = {
  paddingTop: '100%',
  backgroundColor: "lightgray"
}

function Resume() {
  return (
    <Card>
      <Flex justify="space-between" align="center">
        <Typography.Title level={4} style={{ margin: '10px 0' }}>Resume</Typography.Title>
        <Space>
          <Button icon={<EyeOutlined />} />
          <Button icon={<CloudDownloadOutlined />} />
        </Space>
      </Flex>
      <div style={DEV_emptyResumeStyle} />
    </Card>
  );
}

export default Resume;
