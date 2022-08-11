import React from 'react'

import axios from 'axios';
import { API_URL } from '../../utils/urls';
import SingleNB from '../../component/templates/SingleNB';

const Single = ({news}) => {
    console.log(news)
  return (
    <>
        <SingleNB news={news}/>
    </>
  )
}

export default Single

export async function getServerSideProps({params}){
    console.log(params.id)
    const newsRes = await axios.get(`${API_URL}/api/news/${params.id}/?populate=*`);
    // console.log('newsRes from getSSprops', newsRes.data)
    return{
        props:{
            news: newsRes.data
        }
    }
}

// export async function getStaticPaths(){
//     const newsRes = await axios.get(`${API_URL}/api/news?populate=*`)
//     const paths = newsRes.data.data.map((news)=>{
//         return {params: {id: news.id.toString()}}
//     });

//     return{
//         paths,
//         fallback: false,
//     }
// }
