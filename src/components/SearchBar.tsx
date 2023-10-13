import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Input } from "antd";

function SearchBar() {
  return (
    <Flex gap={8}>
      <Card bodyStyle={{ padding: '10px 10px' }} style={{ flex: 1}}>
        <Input
          size="small"
          bordered={false}
          placeholder={"search by name, edu, exp or #tag"}
          prefix={<SearchOutlined className="site-form-item-icon" />}
        />
      </Card>
      <Card bodyStyle={{ padding: '0' }}>
        <Button size="large" type="text" icon={<FilterOutlined />} style={{ padding: '10px' }} />
      </Card>
    </Flex>
  )
}

export default SearchBar;
