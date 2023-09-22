import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import styles from "../css/app.module.css"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout className={styles.layout}>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}
