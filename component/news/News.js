import React, { useState, useEffect } from 'react'
import styles from './news.module.css'
import n1 from '../../assets/images/n1.jpg'
import { BsArrowRight } from 'react-icons/bs';
import { API_URL } from '../../utils/urls';
import NewsCard from '../newscard/NewsCard';
import Link from 'next/link';
import Button1 from '../button1/Button1';

const index = (props) => {

    // const ref1 = useRef(null)
    // const ref2 = useRef(null)
    // const ref3 = useRef(null)
  
    // useEffect(() => {
    //   setHeight(Math.max(ref1.current.offsetHeight, ref2.current.offsetHeight, ref3.current.offsetHeight));
    // },[])

    // console.log('news',props.props)
    // const [news,setNews] = useState([])

    // useEffect(() => {
    //     setNews(props.props.data.slice(0,5))  
    //   }, [news]);

    let news =  props.props
    console.log('news',news.sort((a,b)=>b.id-a.id))

    // console.log(props.props.data[0].attributes.image.data.attributes.formats.medium.url)
  return (
    <>
    <div className={styles.container}>
    <div className={styles.title}> 
        <h2>News</h2>
        <Button1 text='More News' route='/news'/>
    </div>

    <div className={styles.space}></div>

        <div className={styles.news_container}>
        {news.map((items, index) => {
            console.log('item',items)
            return(
                <div key={index} className={styles.news}>
            <NewsCard img={items.attributes.image.data.attributes.url}
            desc={items.attributes.title}
            type='news'
            id={items.id}
            />
            </div>
            )
        })}
        </div>
    </div>
    </>
  )
}


export default index

// export async function getServerSideProps() {

//     let headers = {Authorization: "Bearer 3928af1a0046d93727dd5efbeb0521a83e87b2b67f2da956000fde1c37ba9b4eeadf0984fd31df8c79518a6b0eefa666dc94568db2ab1cfd238b362e2d1c348f708c3eb9e44367adb980f013219db515b7646dc5ca0f089d87d40dfdf881b21802e5e18182fb20cd2730ee122d84b35e97a4bcb7adb0fb1148437f63ba2a557c"}
//     // Fetch data from external API
//     const res = await fetch('http://localhost:1337/api/news', {headers:headers})
//     const data = await res.json()
//     console.log(data)
//   // Pass data to the page via props
//     return { props: { data } }

//     // const {data} = await axios.get('http://localhost:1337/api/news')
//     // console.log(data)
//     // return {
//     //   props: {
//     //   },
//     // }
// }
