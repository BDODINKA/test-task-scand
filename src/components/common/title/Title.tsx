import React, { FC } from 'react'

import { ITitle } from '@/interface/ITitle'
import style from '@/styles/Title/title.module.scss'

export const Title: FC<ITitle> = ({ size, children, className }) => {
  const classNames = () => {
    return className ? `${style[size]} ${className}` : style[size]
  }

  switch (size) {
    case 'lg-h1': {
      return <h1 className={classNames()}>{children}</h1>
    }
    case 'lg-h2': {
      return <h2 className={classNames()}>{children}</h2>
    }
    case 'md-h3': {
      return <h3 className={classNames()}>{children}</h3>
    }
    case 'md-h4': {
      return <h4 className={classNames()}>{children}</h4>
    }
    case 'sm-h5': {
      return <h5 className={classNames()}>{children}</h5>
    }
    case 'sm-h6': {
      return <h6 className={classNames()}>{children}</h6>
    }
  }
}
