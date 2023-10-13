import { IMemeber } from "@/types";
import {
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Divider, Flex, Space, Tag, Typography } from "antd";

function ProfileHeader(props: { value: IMemeber }) {
  return (
    <Card bodyStyle={{ padding: '15px 20px' }}>
      <Flex justify="space-between" align="center" gap={24}>
        <Avatar size={64} icon={<UserOutlined />} />
        <Flex vertical style={{ flex: 1 }}>
          <Flex justify="start" align="center" gap={16}>
            <Typography.Title level={3} style={{ margin: 0 }}>{props.value.name}</Typography.Title>
            <Tag bordered={false} color="#F9FAFF">
              <Typography.Text>
                New York
              </Typography.Text>
            </Tag>
            <Tag bordered={false} color="#F9FAFF">
              <Typography.Text>
                Marketing
              </Typography.Text>
            </Tag>
            <Tag bordered={false} color="#F9FAFF">
              <Typography.Text>
                London
              </Typography.Text>
            </Tag>
          </Flex>
          <Flex justify="start" align="center">
            <Typography.Text style={{ paddingRight: '16px'}}>{props.value.nationality}</Typography.Text>
            <Divider type="vertical" />
            <Button type="text">aaliyahs@gmail.com</Button>
            <Divider type="vertical" />
            <Button type="text">+00 000 000 0000</Button>
          </Flex>
          <Space>
            <Tag bordered={false} closable>#top-condidate</Tag>
            <Tag bordered={false} closable>#top-condidate</Tag>
            <Button type="text" icon={<PlusCircleOutlined />} size="small">Add tag</Button>
          </Space>
        </Flex>
        <Flex vertical justify="start" align="center" gap={16}>
          <Flex
            align="center"
            style={{
              boxShadow: "5px 5px 10px rgba(90,90,90, .1)",
              padding: '10px 20px',
              borderRadius: 30,
              marginTop: 20,
            }}
            gap={32}
          >
            <Typography.Title style={{ margin: 0 }} level={4}>Overall Score</Typography.Title>
            <Badge count={7} color="gray"/>
          </Flex>
          <Typography.Text type="secondary">Applied on 12 Jun 2023</Typography.Text>
        </Flex>
      </Flex>
    </Card>
  )
}

export default ProfileHeader;
