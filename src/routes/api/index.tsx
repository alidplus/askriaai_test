import { RouteObject } from "react-router-dom"
import ErrorBoundary from "@/components/layout/ErrorBoundary"
import { Checkbox, Col, Row, message } from 'antd';
import { ApplicationFOrm, ApplicationTemplateService } from "@/services/openapi";
import { useState, useEffect, useCallback } from "react";
import AttributesInput from "@/components/inputs/AttributesInput";
import _ from "lodash"

const programId = 'ali'
const version = 3

function StopLight () {
  const [data, setData] = useState<ApplicationFOrm['data'] | undefined>()
  const [show, setShow] = useState(false)
  useEffect(() => {
    ApplicationTemplateService.getApplicationForm(programId, version)
    .then(res => setData(res.data))
  }, [])

  const toastSuccess = useCallback(_.debounce(() => {
    message.success('your application saved successfully')
  }, 2000), [])

  function handleChange(value: ApplicationFOrm['data']) {
    console.log('change???', value === data);
    
    setData(value)
    ApplicationTemplateService.updateApplicationForm(programId, version, { data: value })
    .then(toastSuccess)
    .catch((e) => {
      console.log(e);
      message.error('your application sumbit failed!')
    })
  }

  if (!data?.attributes) return null
  return (
    <Row>
      <Col span={12}>
        <AttributesInput value={data.attributes} onChange={attributes => handleChange({ ...data, attributes })} />
      </Col>
      <Col span={12}>
        <Checkbox checked={show} onChange={() => setShow(!show)}>show state</Checkbox>
        {show && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </Col>
    </Row>
  )
}

const route: RouteObject = {
  path: "/api",
  Component: StopLight,
  ErrorBoundary
}

export default route