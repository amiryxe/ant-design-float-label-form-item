import { Form, FormItemProps } from 'antd'
import React, { useState } from 'react'

import './style/index.css'

type Props = {
  children: React.ReactNode
} & FormItemProps

// `afl-floating-label ${isActive ? 'afl-floating-label--active' : ''}

export default function FloatingLabelFormItem(props: Props) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      onBlur={() => setIsActive(false)}
      onClick={() => setIsActive(true)}
      className="afl-floating-wrapper"
    >
      <div className="afl-floating-label-box">
        <fieldset className="afl-floating-label">
          <legend>{props.label}</legend>
        </fieldset>
      </div>

      <Form.Item noStyle {...props}>
        {props.children}
      </Form.Item>
    </div>
  )
}
