import { Form, FormItemProps, theme } from 'antd'
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'

type Props = {
  children: React.ReactNode
} & FormItemProps

const { useToken } = theme

export default function FloatingLabelFormItem(props: Props) {
  const form = Form.useFormInstance()
  const value = Form.useWatch([props.name], form)

  // @ts-ignore: Unreachable code error
  const isSmallField: unknown = props?.children?.props?.size === 'small'

  console.log(isSmallField)

  const [isActive, setIsActive] = useState(value ? true : false)

  useEffect(() => {
    setIsActive(value ? true : false)
  }, [value])

  const { token } = useToken()

  const labelStyles = css`
    position: relative;

    .ant-form-item-label {
      display: none;
    }

    & span {
      position: absolute;
      left: 0.5rem;
      top: 50%;
      z-index: 1;
      pointer-events: none;
      transform: translateY(-50%);
      transition: all 0.2s;
      color: ${token.colorTextLabel};
      ${isSmallField ? 'font-size: 90%;' : ''}
    }

    ${isActive
      ? `& span {
      top: ${isSmallField ? '.2rem' : '0'};;
      left: 0.5rem;
      font-size: ${isSmallField ? '70%' : '90%'};
      line-height: 90%;
      padding: 0 0.3rem;
      background: ${token.colorBgBase};
    }`
      : ''}

    ${isActive
      ? `
      &:focus-within span {
        color: ${token.colorPrimary};
      }
      `
      : ''}
  `

  return (
    <div
      className={labelStyles}
      onClick={() => setIsActive(true)}
      onBlur={() => (value ? null : setIsActive(false))}
      onFocus={() => setIsActive(true)}
    >
      <Form.Item {...props}>
        <div>
          <span>{props.label}</span>
          {props.children}
        </div>
      </Form.Item>
    </div>
  )
}
