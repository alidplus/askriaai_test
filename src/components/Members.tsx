import { IMemeber } from "@/types";
import { Avatar, Button, Card, Checkbox, Flex, List, Space, Typography } from "antd";

function Members(props: { value: IMemeber[], selected: number }) {
  return (
    <Card bodyStyle={{ padding: '15px 20px' }}>
      <List
        dataSource={props.value}
        renderItem={(item, index) => (
          <List.Item>
            <Flex justify="space-between" align="center" style={{ width: '100%' }} gap={15}>
              <Checkbox />
              <MemeberItem value={item} selected={index === props.selected} />
            </Flex>
          </List.Item>
        )}
      />
    </Card>
  )
}

function MemeberItem (props: { value: IMemeber, selected?: boolean }) {
  return (
    <Card style={{ width: '100%', boxShadow: 'none', backgroundColor: props.selected ? '#F9FAFF' : 'transparent' }} bordered={false}>
      <Flex style={{ width: '100%' }} gap={16} align="center">
        <Avatar size={64} icon={'SD'} />
        <Space direction="vertical" size="small" style={{ flex: 1 }}>
          <Typography.Title level={4} style={{ margin: 0 }}>{props.value.name}</Typography.Title>
          <Typography.Text strong>{props.value.nationality}</Typography.Text>
          <Typography.Text >{props.value.education}</Typography.Text>
          <Space>
            <Typography.Text type="secondary">#top-condidate</Typography.Text>
            <Typography.Text type="secondary">#top-condidate</Typography.Text>
          </Space>
          <Flex justify="start" gap={16}>
            <Button size="small" type="text">New York</Button>
            <Button size="small" type="text">Marketing</Button>
            <Button size="small" type="text">London</Button>
          </Flex>
        </Space>
      </Flex>
    </Card>
  )
}

export default Members;
