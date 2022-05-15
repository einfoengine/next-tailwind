import type { NextPage } from 'next'
import Head from 'next/head'
import Branding from '../components/Branding'
import Section from '../Elements/Section'
import SecChild from '../Elements/Section'
import Default from '../layouts/Default.layout'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Default/>
    </>
  )
}

export default Home
