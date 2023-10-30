import { Form, FormItemProps, theme } from 'antd'
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'

type Props = {
  children: React.ReactNode
} & FormItemProps

const { useToken } = theme

export default function FloatingLabelFormItem(props: Props) {
  const { token } = useToken()
  const form = Form.useFormInstance()
  const value = Form.useWatch(props.name, form)

  // @ts-ignore: Unreachable code error
  const isSmallField: unknown = props?.children?.props?.size === 'small'

  const [isActive, setIsActive] = useState(value ? true : false)

  useEffect(() => {
    if (value) {
      setIsActive(true)
    }
  }, [value])

  const labelStyles = css`
    position: relative;
    margin-bottom: ${token.marginLG}px;
    font-size: ${token.fontSize}px;

    .ant-form-item-label {
      display: none;
    }

    .antd-mfl__label {
      position: absolute;
      box-sizing: border-box;
      left: 0;
      top: 0;
      z-index: 1;
      height: 100%;
      max-height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 0.6rem;
      background: transparent !important;

      pointer-events: none;
      transition: all 0.2s;
      color: ${token.colorTextLabel};
      ${isSmallField ? 'font-size: 0.8em;' : ''};
    }

    .antd-mfl__label span {
      background: ${token.colorBgBase};
      display: block;
      padding: 0 0.2rem;
      line-height: 100%;
    }

    ${isActive
      ? `.antd-mfl__label {
      top: -.5em;
      left: 0;
      height: 1em;
      font-size: ${isSmallField ? '.8em' : '.9em'};
      background: ${token.colorBgBase};
    }`
      : ''}

    ${isActive
      ? `
      &:focus-within .antd-mfl__label {
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
      <Form.Item {...props}>{props.children}</Form.Item>

      <div className="antd-mfl__label">
        <span>{props.label}</span>
      </div>
    </div>
  )
}
