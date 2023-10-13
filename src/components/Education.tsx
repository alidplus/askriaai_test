import { FileProtectOutlined } from "@ant-design/icons";
import { Card, Divider, Flex, List, Space, Typography } from "antd";
import { thumbnailStyle } from "./PersonalInf";

function Education() {
  return (
    <Card>
      <Typography.Title level={4} style={{ margin: '10px 0' }}>Education</Typography.Title>
      <List
        dataSource={[1, 2]}
        renderItem={() => (
          <List.Item>
            <Space size="large">
              <Card bodyStyle={thumbnailStyle} style={{ width: '40px', height: '40px' }}>
                <FileProtectOutlined />
              </Card>
              <Space direction="vertical">
                <Typography.Text strong>Bachelor in Biochemistry</Typography.Text>

                <Flex justify="start" align="center" gap={16}>
                  <Typography.Text>Nationality</Typography.Text>
                  <Divider type="vertical" />
                  <Typography.Text type="secondary" disabled>Saudi Arabia</Typography.Text>
                  <Divider type="vertical" />
                  <Typography.Text type="secondary" disabled>Jan 2022 - Jan 2023</Typography.Text>
                </Flex>
              </Space>
            </Space>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default Education;
