import React, { FC } from 'react'

import Image from 'next/image'

import { Title } from '@/components/common/title/Title'
import { IAuthor } from '@/interface/IAuthor'
import style from '@/styles/Author/author.module.scss'

export const Author: FC<IAuthor> = ({ ava, children, className }) => {
  const finalClassWrapper = className ? `${style.wrapper} ${className}` : style.wrapper

  return (
    <div className={finalClassWrapper}>
      <Image src={ava} alt={''} width={32} height={32} className={style.ava} />
      <Title size={'sm-h6'}>{children}</Title>
    </div>
  )
}
