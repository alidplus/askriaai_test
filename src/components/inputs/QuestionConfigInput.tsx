
import { QuestionTemplate } from "@/services/openapi";
import { InputProps } from "@/types";
import { CloseOutlined, EditOutlined, PlusOutlined, SaveOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Collapse, Flex, Input, InputNumber, List, Row, Select, Space, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import _ from "lodash";
import React, { PropsWithChildren, useEffect, useState } from "react";

const qOptions: Array<{ value: QuestionTemplate.type, label: string }> = Object.values(QuestionTemplate.type)
.map(value => ({ label: _.startCase(value), value }))

function QuestionsConfigArrayInput(props: InputProps<QuestionTemplate[]>) {
  function handleChange(index: number, value: QuestionTemplate | false) {
    const clone = (props.value ?? []).concat()
    if (value === false) clone.splice(index, 1)
    else clone.splice(index, 1, value)
    props.onChange?.(clone)
  }

  return (
    <List
      size="small"
      footer={
        <Button
          onClick={() => handleChange(props.value.length, { type: QuestionTemplate.type.PARAGRAPH, question: '' })}
          type="text"
          icon={<PlusOutlined />}
        >Add a question</Button>
      }
      dataSource={props.value}
      renderItem={(item, index) => (
        <List.Item style={{ padding: 0 }}>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <QuesionsCollapse value={item}>
              <QuestionConfigBufferedInput title={`Q${index + 1}: `} value={item} onChange={v => handleChange(index, v)}>
                <Button
                  onClick={() => handleChange(index, false)}
                  type="text"
                  danger
                  icon={<CloseOutlined />}
                >Delete question</Button>
              </QuestionConfigBufferedInput>
            </QuesionsCollapse>
          </Space>
        </List.Item>
      )}
    />
  )
}

function QuesionsCollapse(props: PropsWithChildren<InputProps<QuestionTemplate>>) {
  const [open, setOpen] = useState<boolean>(false)
  useEffect(() => { setOpen(false) }, [props.value])
  return (
    <Collapse
      ghost
      className="question-collapse"
      expandIconPosition="end"
      expandIcon={({ isActive }) => isActive ? null : <EditOutlined style={{ fontSize: '18px', paddingTop: '28px' }} />}
      activeKey={open ? 'active' : ''}
      onChange={() => {
        setOpen(!open)
      }}
      items={[
        {
          key: 'active',
          label: (
            <React.Fragment>
              <Typography.Text disabled>{props.value.type}</Typography.Text>
              <Typography.Title
                level={4}
                style={{ margin: 0 }}
                italic={!props.value.question}
                disabled={!props.value.question}
              >
                {props.value.question || 'empty'}
              </Typography.Title>
            </React.Fragment>
          ),
          children: props.children
        },
      ]}
    />
  )
}

function QuestionConfigBufferedInput(props: PropsWithChildren<InputProps<QuestionTemplate>>) {
  const [buffer, setBuffer] = useState<QuestionTemplate>(props.value)
  const [isDirty, setDirty] = useState(false)

  function handleChange<K extends keyof QuestionTemplate>(key: K, value: QuestionTemplate[K]) {
    setBuffer({ ...buffer, [key]: value })
    setDirty(true)
  }

  function handleSave() {
    if (isDirty) props.onChange?.({ ...buffer })
    setDirty(false)
    setBuffer(props.value)
  }

  useEffect(() => {
    if (!isDirty) setBuffer(props.value)
  }, [props.value, isDirty])

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <Typography.Text strong>{props.title}Type</Typography.Text>
        <Select
          style={{ width: '100%' }}
          value={buffer.type}
          onChange={value => handleChange('type', value)}
          options={qOptions}
        />
      </Space>

      {buffer.type && (
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <Typography.Text strong>Question</Typography.Text>
          <Input placeholder="Type here" value={buffer.question} onChange={e => handleChange('question', e.target.value)} />
          {buffer.type === QuestionTemplate.type.YES_NO && (
            <Space size="middle">
              <div></div>
              <Checkbox checked={buffer.other} onChange={() => handleChange('other', !buffer.other)}>
                Disqualify candidate if the answer is no
              </Checkbox>
            </Space>
          )}
          {buffer.type === QuestionTemplate.type.FILE_UPLOAD && (
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <TextArea
                rows={4}
                placeholder="Please talk about your achievements, goals and what you worked on as the latest project."
                maxLength={600}
              />
              <Row gutter={8}>
                <Col span={12}>
                  <InputNumber
                    style={{ width: '100%' }}
                    defaultValue={10}
                    placeholder="Max duration of video"
                    min={1}
                    max={10}
                  />
                </Col>
                <Col span={12}>
                  <Select
                    style={{ width: '100%' }}
                    defaultValue="minute"
                    options={[
                      { value: 'minute', label: 'Minute' },
                      { value: 'seconds', label: 'Seconds' }
                    ]}
                  />
                </Col>
              </Row>
            </Space>
          )}
        </Space>
      )}
      {[QuestionTemplate.type.MULTIPLE_CHOICE, QuestionTemplate.type.DROPDOWN].includes(buffer.type) && (
        <React.Fragment>
          <Space direction="vertical" size="small" style={{ width: '100%', marginLeft: '20px' }}>
            <Typography.Text strong>Choices</Typography.Text>
            <QuestionOptionsInputFragment value={buffer.choices} onChange={v => handleChange('choices', v)}>
              <Space size="middle">
                <div></div>
                <Checkbox checked={buffer.other} onChange={() => handleChange('other', !buffer.other)}>
                  Enable "Other" option
                </Checkbox>
              </Space>
            </QuestionOptionsInputFragment>
            {buffer.type === QuestionTemplate.type.MULTIPLE_CHOICE && (
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <Typography.Text strong>Max choice allowed</Typography.Text>
                <div>
                  <InputNumber
                    min={2}
                    style={{ width: '90%' }}
                    max={buffer.choices?.length}
                    placeholder="Enter number of choice allowed here"
                    defaultValue={2}
                    value={buffer.maxChoice}
                    onChange={n => n && handleChange('maxChoice', n)}
                  />
                </div>
              </Space>
            )}
          </Space>
        </React.Fragment>
      )}
      <Flex justify="space-between">
        {props.children}
        <div></div>
        <Button
          onClick={handleSave}
          type="primary"
          disabled={!isDirty}
          icon={<SaveOutlined />}
        >Save</Button>
      </Flex>
    </Space>
  )
  
}

function QuestionOptionsInputFragment(props: PropsWithChildren<InputProps<Array<string> | undefined>>) {
  useEffect(() => {
    if (!props.value || props.value.length === 0)
      props.onChange?.([''])
  }, [props.value])

  function handleChange(index: number, value: string | false) {
    const clone = (props.value ?? []).concat()
    if (value === false) clone.splice(index, 1)
    else clone.splice(index, 1, value)
    props.onChange?.(clone)
  }

  return (
    <List
      size="small"
      footer={
        <Flex justify="space-between">
          {props.children}
          <div></div>
          <Button
            onClick={() => handleChange(props.value?.length ?? 0, '')}
            type="text"
            icon={<PlusOutlined />}
          >Add New Choice</Button>
        </Flex>
      }
      dataSource={props.value}
      renderItem={(item, index) => (
        <List.Item>
          <Flex style={{ width: '100%' }} gap={10}>
            <UnorderedListOutlined />
            <Input placeholder="Type here" value={item} onChange={e => handleChange(index, e.target.value)} />
            <Button type="text" shape="circle" icon={<CloseOutlined />} onClick={() => handleChange(index, false)} disabled={!index && props.value?.length === 1} />
          </Flex>
        </List.Item>
      )}
    />
  )
}

export default QuestionsConfigArrayInput