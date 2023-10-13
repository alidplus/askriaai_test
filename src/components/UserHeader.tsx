import { DownOutlined } from "@ant-design/icons";
import { Badge, Card, Divider, Flex, Typography } from "antd";
import { CSSProperties } from "react";

export const box: CSSProperties = {
  marginBottom: 7,
  borderRadius: 7,
  padding: "10px",
};

function UserHeader() {
  return (
    <Card bodyStyle={{ padding: '10px 10px' }}>
      <Flex justify="space-between" align="center">
        <Badge className="SIP">SIP</Badge>
        <Divider type="vertical" />
        <Typography.Text strong>Opportunity Browsing</Typography.Text>
        <Divider type="vertical" />
        <Typography.Text strong>2325</Typography.Text>
        <Divider type="vertical" />
        <DownOutlined />
      </Flex>
    </Card>
  )
}

export default UserHeader;
