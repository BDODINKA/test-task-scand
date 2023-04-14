import React, { FC, useState } from 'react'

import style from '@/styles/CheckboxOrRadio/checkboxOrRadio.module.scss'

export const CheckboxOrRadio: FC<{
  isRadio: boolean
  id: string
  isChecked: boolean
}> = ({ isRadio, id, isChecked }) => {
  const finalClass = isRadio ? style.radio : style.checkbox

  const [checked, setIsChecked] = useState(isChecked)

  const handleInputChange = () => {
    setIsChecked(!checked)
  }

  return (
    <div className={style.wrapper}>
      <input
        type={isRadio ? 'radio' : 'checkbox'}
        checked={checked}
        onChange={handleInputChange}
        className={finalClass}
        id={`${id} chk`}
      />
      <label htmlFor={`${id} chk`} className={style.label}></label>
    </div>
  )
}
