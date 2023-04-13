import React from 'react'

import { Title } from '@/components/common/title/Title'
import { Wrapper } from '@/components/common/wrapper/Wrapper'
import style from '@/styles/SectionTitle/sectionTitle.module.scss'

export const SectionTitle = () => {
  return (
    <Wrapper className={style.wrapper}>
      <div className={style.title_block}>
        <Title size={'sm-h5'}>Blog</Title>
        <Title size={'lg-h1'}>Thoughts and words</Title>
      </div>
    </Wrapper>
  )
}
