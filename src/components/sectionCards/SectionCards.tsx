import React from 'react'

import { Button } from '@/components/common/button/Button'
import { Card } from '@/components/common/card/Card'
import { Title } from '@/components/common/title/Title'
import { Wrapper } from '@/components/common/wrapper/Wrapper'
import { mocData } from '@/pages/api/mocData/mocData'
import style from '@/styles/SectionCards/sectionCards.module.scss'

export const SectionCards = () => {
  return (
    <Wrapper className={style.wrapper}>
      <Title size={'lg-h2'} className={style.title}>
        {'Latest news'}
      </Title>
      <div className={style.content}>
        {mocData.map(el => (
          <Card
            key={el.id}
            title={el.title}
            date={el.date}
            text={el.text}
            img={el.img}
            authorAva={el.authorAva}
            authorName={el.authorName}
            id={el.id}
          />
        ))}
      </div>
      <Button fill={'transparent'} className={style.btn}>
        {'Load more'}
      </Button>
    </Wrapper>
  )
}
