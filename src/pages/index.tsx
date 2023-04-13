import Head from 'next/head'

import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { SectionCards } from '@/components/sectionCards/SectionCards'
import { SectionEnterPrise } from '@/components/sectionEnterPrise/sectionEnterPrise'
import { SectionPreview } from '@/components/sectionPreview/SectionPreview'
import { SectionTitle } from '@/components/sectionTitle/SectionTitle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <SectionTitle />
        <SectionPreview />
        <SectionCards />
        <SectionEnterPrise />
      </main>
      <Footer />
    </>
  )
}
