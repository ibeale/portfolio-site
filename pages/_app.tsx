import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import './public/css/styles.css';


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}
export default MyApp
