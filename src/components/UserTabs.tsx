import { Flex, Tabs, Typography } from "antd";
import type { TabsProps } from "antd";
import PersonalInf from "./PersonalInf";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import { PropsWithChildren } from "react";
import Resume from "./Resume";
import AdditionalQuestions from "./AdditionalQuestions";

function Profile() {
  return (
    <Flex vertical gap={24}>
      <PersonalInf />
      <Education />
      <WorkExperience />
      <Resume />
      <AdditionalQuestions />
    </Flex>
  );
}

function TabLabel(props: PropsWithChildren) {
  return <Typography.Title level={5} style={{ padding: '0 30px', marginBottom: 0}}>{ props.children }</Typography.Title>
}

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <TabLabel>Profile</TabLabel>,
    children: <Profile />,
  },
  {
    key: "2",
    label: <TabLabel>Video</TabLabel>,
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: <TabLabel>Evaluation</TabLabel>,
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: <TabLabel>Placement</TabLabel>,
    children: "Content of Tab Pane 3",
  },
  {
    key: "5",
    label: <TabLabel>Compliance</TabLabel>,
    children: "Content of Tab Pane 3",
  },
  {
    key: "6",
    label: <TabLabel>Notes</TabLabel>,
    children: "Profile",
  },
];

const UserTabs = () => (
  <Tabs
    size="large"
    defaultActiveKey="1"
    items={items}
    style={{ width: '100%' }}
  />
);

export default UserTabs;
