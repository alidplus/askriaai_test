import { Alert, Badge, Card, Divider, Flex, Input, Space, Tag, Typography } from "antd";

function AdditionalQuestions() {
  return (
    <Card>
      <Flex justify="space-between" align="center">
        <Typography.Title level={4} style={{ margin: '10px 0' }}>Additional Questions</Typography.Title>
        <Space.Compact>
          <Input
            placeholder="Sort"
          />
        </Space.Compact>
      </Flex>
      <Flex vertical gap={32}>
        <Flex gap={16}>
          <Badge color="gold" className="question-bullet" />
          <Flex vertical align="stretch" style={{ width: '100%' }}>
            <Divider orientation="left" plain style={{ margin: 0 }}>
              <Tag bordered={false} color="gold" style={{ margin: '0 0 15px 0' }}>
                Short Answer
              </Tag>
            </Divider>
            <Typography.Text>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</Typography.Text>
            <br />
            <Alert description="Dorem ipsum dolor sit amet, consectetur adipiscing elit." type="info" />
          </Flex>
        </Flex>
        <Flex gap={16}>
          <Badge color="geekblue" className="question-bullet" />
          <Flex vertical align="stretch" style={{ width: '100%' }}>
            <Divider orientation="left" plain style={{ margin: 0 }}>
              <Tag bordered={false} color="geekblue" style={{ margin: '0 0 15px 0' }}>
                Video Upload
              </Tag>
            </Divider>
            <Typography.Text>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</Typography.Text>
            <br />
            <Alert description="Dorem ipsum dolor sit amet, consectetur adipiscing elit." type="info" />
          </Flex>
        </Flex>
        <Flex gap={16}>
          <Badge color="orange" className="question-bullet" />
          <Flex vertical align="stretch" style={{ width: '100%' }}>
            <Divider orientation="left" plain style={{ margin: 0 }}>
              <Tag bordered={false} color="orange" style={{ margin: '0 0 15px 0' }}>
                Number
              </Tag>
            </Divider>
            <Typography.Text>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</Typography.Text>
            <br />
            <Alert description="Dorem ipsum dolor sit amet, consectetur adipiscing elit." type="info" />
          </Flex>
        </Flex>
        <Flex gap={16}>
          <Badge color="lime" className="question-bullet" />
          <Flex vertical align="stretch" style={{ width: '100%' }}>
            <Divider orientation="left" plain style={{ margin: 0 }}>
              <Tag bordered={false} color="lime" style={{ margin: '0 0 15px 0' }}>
                Multiple Choice
              </Tag>
            </Divider>
            <Typography.Text>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</Typography.Text>
            <br />
            <Alert description="Dorem ipsum dolor sit amet, consectetur adipiscing elit." type="info" />
          </Flex>
        </Flex>
        <Flex gap={16}>
          <Badge color="rgb(45, 183, 245)" className="question-bullet" />
          <Flex vertical align="stretch" style={{ width: '100%' }}>
            <Divider orientation="left" plain style={{ margin: 0 }}>
              <Tag bordered={false} color="rgb(45, 183, 245)" style={{ margin: '0 0 15px 0' }}>
                Dropdown
              </Tag>
            </Divider>
            <Typography.Text>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</Typography.Text>
            <br />
            <Alert description="Dorem ipsum dolor sit amet, consectetur adipiscing elit." type="info" />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

export default AdditionalQuestions;
