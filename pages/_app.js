import '@/styles/globals.scss'
import { Fragment } from 'react'
import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return <Fragment>
    <Navigation />
    <Component {...pageProps} />
    <Footer />
  </Fragment>
}

export default MyApp
