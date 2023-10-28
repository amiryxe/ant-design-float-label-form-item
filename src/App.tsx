import { Form, Input } from 'antd'
import FloatingLabelFormItem from './antd-floating-label'

function App() {
  return (
    <>
      <Form layout="vertical">
        <Form.Item name="any" label="Regular antd Form Item (Input)">
          <Input />
        </Form.Item>

        <FloatingLabelFormItem name="field1" label="Materialized antd Form Item (Input: small)">
          <Input size="small" />
        </FloatingLabelFormItem>

        <FloatingLabelFormItem name="field2" label="Materialized antd Form Item (Input: medium)">
          <Input />
        </FloatingLabelFormItem>

        <FloatingLabelFormItem name="field3" label="Materialized antd Form Item (Input: large)">
          <Input size="large" />
        </FloatingLabelFormItem>
      </Form>
    </>
  )
}

export default App
