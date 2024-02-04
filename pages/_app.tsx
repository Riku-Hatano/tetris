import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import styles from "../css/app.module.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout className={styles.layout}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
