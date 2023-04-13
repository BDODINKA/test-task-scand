import React, { FC, useState } from 'react'

import Link from 'next/link'

import { Button } from '@/components/common/button/Button'
import { Logo } from '@/components/common/logo/Logo'
import style from '@/styles/Header/header.module.scss'

export const Header: FC = () => {
  const [check, setCheck] = useState<boolean>(false)

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Logo />
        <input
          id="menu_toggle"
          type="checkbox"
          checked={check}
          onChange={e => setCheck(e.target.checked)}
        />
        <label className={style.menu_btn} htmlFor="menu_toggle">
          <span></span>
        </label>
        <nav className={style.nav_items}>
          <Link href={'#'} className={style.nav_item}>
            Product
          </Link>
          <Link href={'#'} className={style.nav_item}>
            Services
          </Link>
          <Link href={'#'} className={style.nav_item}>
            About
          </Link>
          <Button fill={'transparent'}>{'Log In'}</Button>
        </nav>
      </div>
    </header>
  )
}
