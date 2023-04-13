import { StaticImageData } from 'next/image'

export interface ICard {
  id: string
  img: string | StaticImageData
  title: string
  date: string
  text: string
  authorAva: string | StaticImageData
  authorName: string
}
