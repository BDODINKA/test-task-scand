import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

import style from '@/styles/Input/input.module.scss'

export const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, ...rest }) => {
  const finalClass = className ? `${style.input} ${className}` : style.input

  return <input type="email" className={finalClass} {...rest} />
}
