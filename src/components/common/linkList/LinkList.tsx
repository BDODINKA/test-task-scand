import React, { FC } from 'react'

import Link from 'next/link'

import { Title } from '@/components/common/title/Title'
import { ILinkList } from '@/interface/ILinkList'
import style from '@/styles/LinkList/linkList.module.scss'

export const LinkList: FC<{ link: ILinkList[]; children?: React.ReactNode }> = ({
  link,
  children,
}) => {
  return (
    <ul className={style.list_items}>
      {link.map(el => (
        <li key={el.title} className={style.list_item}>
          {el.href ? (
            <Link href={el.href} className={style.item_link}>
              {el.title}
            </Link>
          ) : (
            <Title size={'md-h3'}>{el.title}</Title>
          )}
          {el.hiring && children}
        </li>
      ))}
    </ul>
  )
}
