import '../styles/globals.scss'
import {Fragment} from 'react'
import Navigation from '../components/navigation/Navigation'
function MyApp({ Component, pageProps }) {
  return <Fragment>
      <Navigation/>
      <Component {...pageProps} />
  </Fragment>
}

export default MyApp
