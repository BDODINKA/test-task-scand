import React from 'react'

import { StaticImageData } from 'next/image'

export interface IAuthor {
  ava: string | StaticImageData
  children: React.ReactNode
  className?: string
}
