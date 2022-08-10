import Navbar from "../../component/navbar/Navbar";
import Sponsor from "../../component/sponsors/Sponsor";
import VideoPlayer from "../../component/videoplayer/Video";
import styles from "./landing.module.css";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <div className={styles.title}>
        <p className={styles.heading}>A leader in global freight business</p>
        <p className={styles.content}>
          We Don't Just <u>Deliver Freight</u> , But <u>Peace Of Mind</u>
        </p>
        <div className={styles.button_container}>
          <Link href="/contact">
            <div className={styles.explore}>
              <p className={styles.btn_text}>CONTACT</p>
              <BsArrowRight />
            </div>
          </Link>
          <a href="#services">
            <div className={styles.services}>
              <p className={styles.btn_text}>SERVICES</p>
              <BsArrowRight />
            </div>
          </a>
        </div>
      </div>
      <div className={styles.videoplayer}>
        <VideoPlayer />
      </div>
      {/* <Sponsor/> */}
    </>
  );
};

export default Landing;
