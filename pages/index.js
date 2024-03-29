import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from '../component/landing/landing'
import AboutUs from '../component/aboutus/AboutUs'
import Cards from '../component/cards/Card'
import News from '../component/news/News'
import Services from '../component/services/Services'
import Testimonials from '../component/testimonials/Testimonials'
import Awards from '../component/awards/Award'
import Gallery from '../component/gallery/Gallery'
import Blog from '../component/blogs/Blogs'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../component/footer/Footer'
import Faqs from '../component/faqs/Faqs'

import axios from 'axios';
import Sponsor from '../component/sponsors/Sponsor'
import { API_URL } from '../utils/urls'

export default function Home({news, gallery, blogs}) {
  // console.log('gallery',news)
  // console.log('news',gallery)
  return (
    <div className={styles.container}>
      <Head>
        <title>EverFastFright</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing/>
      <div className={styles.space_about}></div>
      <AboutUs/>
      <div className={styles.space}></div>
      <Sponsor/>
      <div className={styles.space}></div>
      <Cards/>
      <div className={styles.space}></div>
      <Services/>
      <div className={styles.space}></div>
      {/* <Testimonials/>
      <div className={styles.space}></div> */}
      {/* <Awards/>
      <div className={styles.space}></div> */}
      <Gallery props={gallery.data}/>
      <div className={styles.space}></div>
      <Blog props={blogs.data}/>
      <div className={styles.space}></div>
      <News props={news.data}/>
      <div className={styles.space}></div>
      <Faqs/>
      {/* <div className={styles.space}></div> */}
      {/* <Footer/> */}
    </div>
  )
}

// export async function getStaticProps() {

//   const newsRes = await axios.get('http://localhost:1337/api/news?populate=*');
//   const galleryRes = await axios.get('http://localhost:1337/api/galleries?populate=*');
  
//   return {
//       props: {
//         news: newsRes.data,
//         gallery: galleryRes.data
//       },
//   }
// }
// export async function getStaticProps() {

  // const galleryRes = await axios.get('http://localhost:1337/api/galleries?populate=*');

//   return {
//       props: {
//         gallery: galleryRes.data,
//       },
//   }
// }

// export async function getStaticProps() {

//   const [newsRes,galleryRes] = await Promise.all([axios.get('http://localhost:1337/api/galleries?populate=*'),axios.get('http://localhost:1337/api/galleries?populate=*')]);

//   return {
//       props: {newsRes,galleryRes}}
//   }
// const blogsRes = await axios.get(`${API_URL}/api/blogs?populate=*`);

export async function getServerSideProps() {
  const [newsRes, galleryRes, blogsRes] = await Promise.all([
    fetch(`${API_URL}/api/news?populate=*`), 
    fetch(`${API_URL}/api/galleries?populate=*`),
    fetch(`${API_URL}/api/blogs?populate=*`)
  ]);
  const [news, gallery, blogs] = await Promise.all([
    newsRes.json(), 
    galleryRes.json(),
    blogsRes.json()
  ]);
  return { props: { news, gallery,blogs } };
}