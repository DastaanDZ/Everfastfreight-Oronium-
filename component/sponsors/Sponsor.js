import React from 'react'
import styles from './sponsor.module.css'
import SponsorData from '../../assets/data/SponsorData'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination,Navigation} from "swiper";

const Sponsor = () => {

  
  return (
    <>
    <div> 
    <Swiper
        // slidesPerView={3}
        // spaceBetween={30}
        // slidesPerGroup={3}
        loop={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

        className="mySwiper"
      >
      {SponsorData.map((item,index) => {
        return(
          <SwiperSlide key={index}>
          <div className={styles.sponsor_img_container}> 
        <img src={item.pic.src} style={{width: '50%'}} alt="" />
          </div>
        </SwiperSlide>
        )
      })}
      </Swiper>
    </div>
    </>
  )
}

export default Sponsor
