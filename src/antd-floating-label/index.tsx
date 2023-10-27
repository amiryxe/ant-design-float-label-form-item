import { Form, FormItemProps, theme } from 'antd'
import React, { useState } from 'react'
import { css } from '@emotion/css'

type Props = {
  children: React.ReactNode
} & FormItemProps

const { useToken } = theme

export default function FloatingLabelFormItem(props: Props) {
  const [isActive, setIsActive] = useState(false)

  const { token } = useToken()
  console.log(token.colorBgBase)

  const labelStyles = css`
    position: relative;

    & span {
      position: absolute;
      left: 0.7rem;
      top: 50%;
      z-index: 1;
      pointer-events: none;
      transform: translateY(-50%);
      transition: all 0.2s;
      color: ${token.colorTextLabel};
    }

    ${isActive
      ? `& span {
      top: 0;
      left: 0.7rem;
      font-size: 90%;
      line-height: 90%;
      padding: 0 0.5rem;
      background: ${token.colorBgBase};
    }`
      : ''}
  `

  return (
    <div
      className={labelStyles}
      onClick={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    >
      <Form.Item noStyle {...props}>
        <span>{props.label}</span>
        {props.children}
      </Form.Item>
    </div>
  )
}
