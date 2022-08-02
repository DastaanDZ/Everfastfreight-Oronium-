import AboutImg from '../../assets/images/aboutus.jpg'
import Hero from '../../assets/images/hero.png'
import Button1 from '../../component/button1/Button1'
import styles from './aboutus.module.css'
import ProfileData from '../../assets/data/ProfileData'
import ProfileCard from '../../component/profilecard/ProfileCard'

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.left}>
            <p className={styles.heading}>About Us</p>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error repellendus nihil eveniet ut sit? Qui repellat, maxime atque alias dolores iste esse quam labore reprehenderit, officiis culpa dicta eos ullam!</p>
            <Button1 text='Explore' route='/'/>
        </div>
        <div className={styles.right}>
            <img src={AboutImg.src} className={styles.img} alt="" />
        </div>
      </div>
      
    <div className={styles.space}></div>

      <div className={styles.profile}>
        {ProfileData.map((item,index) => {
            return(
                <div className={styles.profile_card} key={index}> 
                <ProfileCard img={item.img.src} name={item.name} desc={item.desc}/>
                </div>
                )
        })}
      </div>

    <div className={styles.space}></div>

      <div className={styles.info2}>
        <div className={styles.right}>
            <img src={Hero.src} className={styles.hero_img} alt="" />
        </div>
        <div className={styles.left}>
            <p className={styles.heading}>WHAT CAN WE DO FOR YOU?</p>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error repellendus nihil eveniet ut sit? Qui repellat, maxime atque alias dolores iste esse quam labore reprehenderit, officiis culpa dicta eos ullam!</p>
            <Button1 text='Explore' route='/'/>
        </div>
      </div>

    <div className={styles.space}></div>

    <div className={styles.history}>
        <p className={styles.heading}>SPECIALISATION VALUE FOR MONEY AND TIME</p>
        <p className={styles.desc}>Ever fast Freight Forwarders Pvt. Ltd., was founded in 1997 with motive to OFFER PEACE OF MIND, is an IATA recognized freight forwarder and are ISO 9001:2008 certified company by URS. We specialize in air, sea, export, and imports. We strongly believe that we are into communication business and transportation is part of it. Equipped with the array of services we are well prepared to accept any challenges evolved from current market trends and Endeavour to encourage your aspirations. We value time. The rules and regulations of international trade become more complex every day. It is vital that every exporter and importer sophisticated or novice, outsource these functions to experts who are experienced, informed and dedicated to the ultimate success of their business partnership.</p>
    </div>
    </div>
  )
}

export default index
