import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as gtag from "../lib/gtag";
import RootLayout from "./layout";
import CA_PUB_NUM from "@/lib/gtag";

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
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CA_PUB_NUM}"
      />
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default App