import '../styles/globals.css'
import '../styles/form.css'
import Navbar from '../component/navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return( 
  <>
  <Navbar/> 
  <Component {...pageProps} />
  </> 
)
}

export default MyApp
