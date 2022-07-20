import React, { useRef, useState } from "react";
import styles from './gallery.module.css'
import hero from '../../assets/images/warehouse.png'
import n1 from '../../assets/images/warehouse.png'
import Head from 'next/head'
import { BsArrowRight,BsArrowLeft } from 'react-icons/bs';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../../utils/urls";

const index = (props) => {

  console.log('url',props.props[0].attributes.Memories.data[0].attributes.url)
  const gallery = props.props[0].attributes.Memories.data
  console.log('gallery', gallery)

  const ref  = useRef(null)
  console.log(ref)

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 624,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className={styles.container}>
    <div className={styles.title}> 
        <p>Gallery</p>
        <div className={styles.learnmore}> 
            <div className={styles.more_news_circle} onClick = {() => ref.current.slickPrev()}>
            <BsArrowLeft/>
            </div>
            <div className={styles.more_news_circle} onClick = {() => ref.current.slickNext()}>
            <BsArrowRight/>
            </div>
            </div>
    </div>
    <Slider 
    ref={ref}
    {...settings}>
              {gallery.map((items, index) => {
            return(
              <div key={index} className={styles.img_container}>
              {console.log(`${API_URL}${items.attributes.url} `)}
  <img style={{ width: 250, height: 250, objectFit: 'contain'}} src={`${API_URL}${items.attributes.url} `} alt="" />
</div>
            )
        })}
    </Slider>

    </div>
    </>
  )
}

export default index


