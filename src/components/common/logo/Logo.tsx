import React, { FC } from 'react'

import Image from 'next/image'

import Logotype from '@/assets/Logo.svg'

export const Logo: FC<{ className?: string }> = ({ className }) => {
  return <Image src={Logotype} alt={'Logo'} className={className} />
}
