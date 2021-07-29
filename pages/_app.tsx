import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css"


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Component {...pageProps} />
  )
  
}
export default MyApp
