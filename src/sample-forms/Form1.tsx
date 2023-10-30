import { Divider, Form, Input, Select } from 'antd'

import FloatingLabelFormItem from '../antd-floating-label'

export default function Form1() {
  return (
    <Form layout="vertical" name="sample_form_1">
      <Form.Item name="regular" label="Regular Input Field">
        <Input />
      </Form.Item>

      <FloatingLabelFormItem name="field1" label="Materialized antd Form Item (Input: small)">
        <Input size="small" />
      </FloatingLabelFormItem>

      <FloatingLabelFormItem name="field2" label="Materialized antd Form Item (Input: medium)">
        <Input />
      </FloatingLabelFormItem>

      <FloatingLabelFormItem
        name="field3"
        label="Materialized antd Form Item (Input: large)"
        initialValue="With initialed value"
      >
        <Input size="large" />
      </FloatingLabelFormItem>

      <FloatingLabelFormItem label="Form Layout" name="layout">
        <Input.TextArea rows={4} />
      </FloatingLabelFormItem>

      <Divider />

      <FloatingLabelFormItem name="selector" label="Select an option">
        <Select style={{ width: '100%' }}>
          <Select.Option value="opt1">Option 1</Select.Option>
          <Select.Option value="opt2">Option 2</Select.Option>
          <Select.Option value="opt3">Option 3</Select.Option>
        </Select>
      </FloatingLabelFormItem>

      <FloatingLabelFormItem
        name="selector2"
        label="Select with initialed value"
        initialValue="opt1"
      >
        <Select style={{ width: '100%' }}>
          <Select.Option value="opt1">Option 1</Select.Option>
          <Select.Option value="opt2">Option 2</Select.Option>
          <Select.Option value="opt3">Option 3</Select.Option>
        </Select>
      </FloatingLabelFormItem>
    </Form>
  )
}
