import Navbar from "../../component/navbar/Navbar"
import Sponsor from "../../component/sponsors/Sponsor"
import VideoPlayer from "../../component/videoplayer/Video"
import styles from './landing.module.css'

const Landing = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.title}>
      <p className={styles.heading}>A leader in global freight business</p>
      <p className={styles.content}>Pellentesque pellentesque venenatis etiam ac. Scelerisque eu, eget quam mi tellus</p>
      <div className={styles.button_container}>
        <div className={styles.explore}>EXPLORE</div>
        <div className={styles.services}>SERVICES</div>
      </div>
    </div>
    <div className={styles.videoplayer}>
      <VideoPlayer/>
    </div>
    <Sponsor/>
    </>
  )
}

export default Landing
