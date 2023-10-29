import { Form, Input } from 'antd'

import FloatingLabelFormItem from '../antd-floating-label'

export default function Form1() {
  return (
    <Form layout="vertical">
      <FloatingLabelFormItem name="field1" label="Materialized antd Form Item (Input: small)">
        <Input size="small" />
      </FloatingLabelFormItem>

      <FloatingLabelFormItem name="field2" label="Materialized antd Form Item (Input: medium)">
        <Input />
      </FloatingLabelFormItem>

      <FloatingLabelFormItem name="field3" label="Materialized antd Form Item (Input: large)">
        <Input size="large" />
      </FloatingLabelFormItem>

      <FloatingLabelFormItem label="Form Layout" name="layout">
        <Input.TextArea rows={4} />
      </FloatingLabelFormItem>
    </Form>
  )
}
