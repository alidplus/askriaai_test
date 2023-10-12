import { ProfileTemplate } from "@/services/openapi";
import { InputProps } from "@/types";
import { Checkbox, Col, Divider, Flex, Row, Switch, Typography } from "antd";
import _ from "lodash";
import React from "react";

function ProfileTemplateInput(props: InputProps<ProfileTemplate>) {
  function handleChange (key: 'mandatory' | 'show', value: boolean) {
    props.onChange?.({ ...props.value, [key]: value })
  }
  return (
    <React.Fragment>
      <Row>
        <Col span={12}>
          <Typography.Text strong>{_.startCase(props.title)}</Typography.Text>
        </Col>
        <Col span={6}>
          <Flex align="center" justify="center" gap={6}>
            <Checkbox checked={props.value.mandatory} onChange={() => handleChange('mandatory', !props.value.mandatory)}>Mandatory</Checkbox>
          </Flex>
        </Col>
        <Col span={6}>
          <Flex align="center" justify="flex-end" gap={6}>
            <Switch checked={props.value.show} onChange={() => handleChange('show', !props.value.show)} />
            <Typography.Text style={{ width: 50 }}>{props.value.show ? 'Show' : 'Hide'}</Typography.Text>
          </Flex>
        </Col>
      </Row>
      {props.devider && <Divider />}
    </React.Fragment>
  )
}

export default ProfileTemplateInput