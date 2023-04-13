import React from 'react'

import bg from '@/assets/bgEmail.webp'
import { Button } from '@/components/common/button/Button'
import { Input } from '@/components/common/input/Input'
import { Title } from '@/components/common/title/Title'
import { Wrapper } from '@/components/common/wrapper/Wrapper'
import style from '@/styles/SectionEnterPrise/sectionEnterPrise.module.scss'

export const SectionEnterPrise = () => {
  return (
    <Wrapper className={style.wrapper}>
      <div className={style.background} style={{ background: `url(${bg.src})no-repeat center` }}>
        <Title size={'lg-h2'} className={style.title}>
          {'An enterprise template to ramp up your company website'}
        </Title>
        <div className={style.content}>
          <Input placeholder={'Your email address'} className={style.input} />
          <Button fill={'colored'} className={style.btn}>
            {'Start now'}
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}
