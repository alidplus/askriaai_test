import { RouteObject } from "react-router-dom";
import ErrorBoundary from "@/components/layout/ErrorBoundary";
import { Row, Col, Flex } from "antd";
import "@/styles/main.css";
import Members from "@/components/Members";
import SearchBar from "@/components/SearchBar";
import UserHeader from "@/components/UserHeader";
import Statistics from "@/components/Statistics";
import ProfileHeader from "@/components/ProfileHeader";
import UserTabs from "@/components/UserTabs";
import { IMemeber } from "@/types";

const members: IMemeber[] = [
  {
    name: "Frances R.Kostka",
    nationality: "Saudi Arabia",
    education: "Bachelor in information Technology an... (2023-2023)",
  },
  {
    name: "Aaliyah Sanderson",
    nationality: "Saudi Arabia",
    education: "Bachelor in Marketing (2023-2023)",
  },
  {
    name: "Michael D.McKee",
    nationality: "Saudi Arabia",
    education: "Bachelor in France (2023-2023)",
  },
  {
    name: "Cristel R.Sclafani",
    nationality: "Saudi Arabia",
    education: "Bachelor in Bio-chemical Engineering (2023-2023)",
  },
  {
    name: "Frances R.Kostka",
    nationality: "Saudi Arabia",
    education: "Bachelor in information Technology an... (2023-2023)",
  },
];


function Dashboard() {
  return (
    <Row gutter={24}>
      <Col span={8}>
        <Flex vertical gap={8}>
          <UserHeader />
          <SearchBar />
          <Statistics />
          <Members value={members} selected={1} />
        </Flex>
      </Col>
      <Col span={16}>
        <ProfileHeader value={members[1]} />
        <UserTabs />
      </Col>
    </Row>
  );
}

const route: RouteObject = {
  path: "",
  Component: Dashboard,
  ErrorBoundary,
};

export default route;
