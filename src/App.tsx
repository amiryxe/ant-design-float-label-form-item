import { Form, Input } from 'antd'
import FloatingLabelFormItem from './antd-floating-label'

function App() {
  return (
    <>
      <Form layout="vertical">
        <Form.Item name="any" label="Regular antd form item">
          <Input />
        </Form.Item>

        <FloatingLabelFormItem name="test" label="custom antd form item">
          <Input />
        </FloatingLabelFormItem>
      </Form>
    </>
  )
}

export default App
