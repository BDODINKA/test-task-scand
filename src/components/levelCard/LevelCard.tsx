import React, { FC } from 'react'

import { CheckboxOrRadio } from '@/components/common/InputCheckboxOrRadio/InputCheckboxOrRadio'
import { Star } from '@/components/common/star/Star'
import { Title } from '@/components/common/title/Title'
import style from '@/styles/LevelCard/levelCard.module.scss'

export const LevelCard: FC<{
  title: string
  subTitle: string
  signature: string
  labels: string[]
  isRadio: boolean
  isChecked: boolean
  theme: 'white' | 'colored'
}> = ({ title, subTitle, signature, labels, isRadio, isChecked, theme }) => {
  return (
    <div className={theme === 'white' ? `${style.wrapper} ${style.wrapper_white}` : style.wrapper}>
      <div>
        <div className={style.top_block}>
          <Star className={theme === 'white' ? style.star_white : undefined} />
          <Title
            size={'lg-h2'}
            className={theme === 'white' ? `${style.title} ${style.text_white}` : style.title}
          >
            {title}
          </Title>
        </div>
        <Title
          size={'md-h4'}
          className={theme === 'white' ? `${style.subtitle} ${style.text_white}` : style.subtitle}
        >
          {subTitle}
        </Title>
        <div className={style.items}>
          {labels.map(el => (
            <div
              key={el}
              className={theme === 'white' ? `${style.item} ${style.item_white}` : style.item}
            >
              <p className={theme === 'white' ? `${style.label} ${style.text_white}` : style.label}>
                {el}
              </p>
              <CheckboxOrRadio isRadio={isRadio} id={el} isChecked={isChecked} />
            </div>
          ))}
        </div>
      </div>
      <Title
        size={'sm-h6'}
        className={theme === 'white' ? `${style.signature} ${style.text_white}` : style.signature}
      >
        {signature}
      </Title>
    </div>
  )
}
