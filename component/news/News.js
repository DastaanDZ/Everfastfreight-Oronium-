import React, { useState, useEffect } from 'react'
import styles from './news.module.css'
import n1 from '../../assets/images/n1.jpg'
import { BsArrowRight } from 'react-icons/bs';
import { API_URL } from '../../utils/urls';

const index = (props) => {
    // console.log('news',props.props)
    // const [news,setNews] = useState([])

    // useEffect(() => {
    //     setNews(props.props.data.slice(0,5))
    //   }, [news]);

    let news =  props.props.slice(0,4)
    // console.log(news)

    // console.log(props.props.data[0].attributes.image.data.attributes.formats.medium.url)
  return (
    <>
    <div className={styles.container}>
    <div className={styles.title}> 
        <p className={styles.heading}>News</p>
        <div className={styles.learnmore}> 
            <p className={styles.mntext}>More news</p>
            <div className={styles.more_news_circle}>
            <BsArrowRight/>
            </div>
            </div>
    </div>

    <div className={styles.space}></div>

        <div className={styles.news_container}>
        {news.map((items, index) => {
            {/* console.log('image attributes',items.attributes.image.data.attributes.url) */}
            return(
                <div key={index} className={styles.news}> 
            <img src={ `${API_URL}${items.attributes.image.data.attributes.url}`} className={styles.img} alt="" />
            <p className={styles.news_title}>ANNOUCEMENT</p>
            <p className={styles.news_desc}>{items.attributes.title}</p>
            <div className={styles.learnmore}> 
            <p className={styles.lmtext}>Learn More</p>
            <div className={styles.learn_more_circle}>
            <BsArrowRight/>
            </div>
            </div>
        </div>
            )
        })}

        {/* <div className={styles.news}> 
            <img src={n1.src} className={styles.img} alt="" />
            <p className={styles.news_title}>ANNOUCEMENT</p>
            <p className={styles.news_desc}>Etiam senectus sed gravida enim nunc donec magnis. Quisque massa proin leo id eget. </p>
            <div className={styles.learnmore}> 
            <p className={styles.lmtext}>Learn More</p>
            <div className={styles.learn_more_circle}>
            <BsArrowRight/>
            </div>
            </div>
        </div>
        <div className={styles.news}> 
            <img src={n1.src} className={styles.img} alt="" />
            <p className={styles.news_title}>ANNOUCEMENT</p>
            <p className={styles.news_desc}>Etiam senectus sed gravida enim nunc donec magnis. Quisque massa proin leo id eget. </p>
            <div className={styles.learnmore}> 
            <p className={styles.lmtext}>Learn More</p>
            <div className={styles.learn_more_circle}>
            <BsArrowRight/>
            </div>
            </div>
        </div>
        <div className={styles.news}> 
            <img src={n1.src} className={styles.img} alt="" />
            <p className={styles.news_title}>ANNOUCEMENT</p>
            <p className={styles.news_desc}>Etiam senectus sed gravida enim nunc donec magnis. Quisque massa proin leo id eget. </p>
            <div className={styles.learnmore}> 
            <p className={styles.lmtext}>Learn More</p>
            <div className={styles.learn_more_circle}>
            <BsArrowRight/>
            </div>
            </div>
        </div>
        <div className={styles.news}> 
            <img src={n1.src} className={styles.img} alt="" />
            <p className={styles.news_title}>ANNOUCEMENT</p>
            <p className={styles.news_desc}>Etiam senectus sed gravida enim nunc donec magnis. Quisque massa proin leo id eget. </p>
            <div className={styles.learnmore}> 
            <p className={styles.lmtext}>Learn More</p>
            <div className={styles.learn_more_circle}>
            <BsArrowRight/>
            </div>
            </div>
        </div> */}
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
