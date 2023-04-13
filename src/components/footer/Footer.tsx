import React from 'react'

import { Button } from '@/components/common/button/Button'
import { LinkList } from '@/components/common/linkList/LinkList'
import { Logo } from '@/components/common/logo/Logo'
import {
  ListLinkDataOne,
  ListLinkDataThree,
  ListLinkDataTwo,
} from '@/pages/api/mocData/ListLinkData'
import style from '@/styles/Footer/footer.module.scss'

export const Footer = () => {
  return (
    <footer>
      <div className={style.wrapper}>
        <div className={style.description_items}>
          <Logo className={style.logo} />
          <p className={style.description}>
            {
              'Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.'
            }
          </p>
          <p className={style.copyright}>{'All rights reserved.'}</p>
        </div>
        <div className={style.nav_items}>
          <LinkList link={ListLinkDataOne} />
          <LinkList link={ListLinkDataTwo}>
            <Button fill={'colored'} className={style.nav_items_btn}>
              {'Hiring!'}
            </Button>
          </LinkList>
          <LinkList link={ListLinkDataThree} />
        </div>
      </div>
    </footer>
  )
}
