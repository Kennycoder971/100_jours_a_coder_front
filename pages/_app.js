import '@/styles/globals.scss'
import { Fragment } from 'react'
import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer/Footer'
import pageDontNeedNavigation from '../helpers/pageDontNeedNavigation'
import pageDontNeedFooter from '../helpers/pageDontNeedFooter'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const dontNeedNav = pageDontNeedNavigation(router)
  const dontNeedFooter = pageDontNeedFooter(router)

  if (dontNeedNav && dontNeedFooter) {
    return <Fragment>
      <Component {...pageProps} />
    </Fragment>
  }

  if (dontNeedNav) {
    return <Fragment>
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  }
  if (dontNeedFooter) {
    return <Fragment>
      <Navigation />
      <Component {...pageProps} />
    </Fragment>
  }

  return <Fragment>
    <Navigation />
    <Component {...pageProps} />
    <Footer />
  </Fragment>
}

export default MyApp
