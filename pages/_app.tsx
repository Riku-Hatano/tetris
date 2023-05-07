import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import styles from "../css/game.css";


export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
