import React, { FC, HTMLAttributes } from 'react'

import { IButton } from '@/interface/IButton'
import style from '@/styles/Button/button.module.scss'

export const Button: FC<IButton & HTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  fill,
  ...rest
}) => {
  const finalClass = (data: IButton) => {
    switch (data.fill) {
      case 'colored': {
        return className ? `${style.colored} ${className}` : style.colored
      }
      case 'transparent': {
        return className ? `${style.transparent} ${className}` : style.transparent
      }
      default: {
        return
      }
    }
  }

  return (
    <button className={finalClass({ fill })} {...rest}>
      {children}
    </button>
  )
}
