import { Badge, Card, Checkbox, Divider, Flex, Typography } from "antd";

function Statistics() {
  return (
    <Card bodyStyle={{ padding: '15px 20px' }}>
      <Flex justify="space-between" align="center">
        <Checkbox />
        <Divider type="vertical" />
        <Typography.Text strong>Qualified <Badge color="blue" count={247}/></Typography.Text>
        <Divider type="vertical" />
        <Typography.Text>Task <Badge color="gray" count={25}/></Typography.Text>
        <Divider type="vertical" />
        <Typography.Text>Disqualified <Badge color="gray" count={78}/></Typography.Text>
      </Flex>
    </Card>
  )
}

export default Statistics;
