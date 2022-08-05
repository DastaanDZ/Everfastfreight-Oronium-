import '../styles/globals.css'
import '../styles/form.css'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'

function MyApp({ Component, pageProps }) {
  return( 
  <>
  <Navbar/> 
  <Component {...pageProps} />
  <Footer/>
  </> 
)
}

export default MyApp
