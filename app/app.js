import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as gtag from "../lib/gtag";
import RootLayout from "./layout";

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default App