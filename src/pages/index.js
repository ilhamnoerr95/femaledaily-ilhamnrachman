import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '/src/styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// component
import TopFrame from '/src/components/ads/TopFrame'
import Billboard from '/src/components/ads/Billboard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Female Daily</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* adsense */}
          <TopFrame/>
          <Billboard/>
        {/* --------------- */}
        {/* <FontAwesomeIcon icon={faCoffee}/> */}
          <h1>HELLO WORLD</h1>
          <p style={{backgroundColor:"red", width:"100%"}}>roboto</p>
      </main>
    </>
  )
}
