import '../styles/globals.css'
import '../styles/form.css'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'

function MyApp({ Component, pageProps }) {
  return( 
  <>
  <Navbar/> 
  <div className="space"></div>
  <Component {...pageProps} />
  <Footer/>
  </> 
)
}

export default MyApp
