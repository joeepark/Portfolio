import Head from 'next/head'
import Intro from '@/src/components/intro/intro'
import Skills from '@/src/components/skills/Skills'
import Work from '@/src/components/work/Work'

export default function Home() {
  return (
    <>
      <Head>
        <title>Joseph Park</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main>
        <Intro />
        <Skills />
        <Work />
      </main>
    </>
  )
}
