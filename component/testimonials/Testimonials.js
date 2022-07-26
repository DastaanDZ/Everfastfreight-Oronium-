import React, { useEffect, useState } from 'react'
import styles from './testimonials.module.css'
import logo from '../../assets/images/logo.png'
import { useRef } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination,Navigation} from "swiper";

const index = () => {

  // const [height,setHeight] = useState(null)

  // const ref1 = useRef(null)
  // const ref2 = useRef(null)
  // const ref3 = useRef(null)

  // useEffect(() => {
  //   setHeight(Math.max(ref1.current.offsetHeight, ref2.current.offsetHeight, ref3.current.offsetHeight));
  // },[])


  return (
    <>
    <div className={styles.container}> 
    <div className={styles.title}>
      <p>Testimonial</p>
    </div>
    <div className={styles.card_container}>
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
        <SwiperSlide>
        <div className={styles.card1}  >
    <div className={styles.up}> 
        <div className={styles.bullet}><p>"</p></div>
        <div className={styles.description}><p>Et dolor enim, imperdiet purus. Praesent enim est mollis convallis donec nec. Fringilla proin diam platea quis cras sed nunc, enim. Pellentesque cras leo in ut. Etiam odio vitae tortor enim sit consectetur posuere. Quam elit lectus ultricies id.</p></div>
    </div>
        <div className={styles.logo_container}>
            <img src={logo.src} className={styles.logo} alt="" />
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.card2}>
    <div className={styles.up}> 
        <div className={styles.bullet}><p>"</p></div>
        <div className={styles.description}><p>Turpis lobortis platea sed suspendisse nunc volutpat gravida velit. In ipsum malesuada morbi venenatis vel risus feugiat. Massa ipsum tincidunt iaculis ultricies quis massa facilisis proin.</p></div>
    </div>
        <div className={styles.logo_container}>
            <img src={logo.src} className={styles.logo} alt="" />
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.card3}>
    <div className={styles.up}> 
        <div className={styles.bullet}><p>"</p></div>
        <div className={styles.description}><p>Turpis lobortis platea sed suspendisse nunc volutpat gravida velit. In ipsum malesuada morbi venenatis vel risus feugiat. Massa ipsum tincidunt iaculis ultricies quis massa facilisis proin.</p></div>
    </div>
        <div className={styles.logo_container}>
            <img src={logo.src} className={styles.logo} alt="" />
        </div>
    </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </>
  )
}

export default index
