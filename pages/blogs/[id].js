import React from 'react'

import axios from 'axios';
import { API_URL } from '../../utils/urls';
import SingleNB from '../../component/templates/SingleNB';

const Single = ({blogs}) => {
    console.log(blogs)
  return (
    <>
        <SingleNB news={blogs}/>
    </>
  )
}

export default Single

export async function getStaticProps({params}){
    console.log(params.id)
    const blogsRes = await axios.get(`${API_URL}/api/blogs/${params.id}/?populate=*`);
    // console.log('newsRes from getSSprops', newsRes.data)
    return{
        props:{
            blogs: blogsRes.data
        }
    }
}

export async function getStaticPaths(){
    const blogsRes = await axios.get(`${API_URL}/api/blogs?populate=*`)
    const paths = blogsRes.data.data.map((blogs)=>{
        return {params: {id: blogs.id.toString()}}
    });

    return{
        paths,
        fallback: false,
    }
}
