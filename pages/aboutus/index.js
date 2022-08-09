import AboutImg from '../../assets/images/aboutus.jpg'
import Hero from '../../assets/images/hero.png'
import Button1 from '../../component/button1/Button1'
import styles from './aboutus.module.css'
import ProfileData from '../../assets/data/ProfileData'
import ProfileCard from '../../component/profilecard/ProfileCard'
import styles2 from '../../component/cards/card.module.css'

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.left}>
        <div className={styles.heading_container}> 
            <p className={styles.heading}>About Us</p>
        </div>
            <p className={styles.desc}>Ever fast Freight Forwarders Pvt. Ltd., was founded in 1997 with motive to OFFER PEACE OF MIND, is an IATA recognized freight forwarder and are ISO 9001:2008 certified company by URS. We specialize in air, sea, export, and imports. We strongly believe that we are into communication business and transportation is part of it. Equipped with the array of services we are well prepared to accept any challenges evolved from current market trends and Endeavour to encourage your aspirations. We value time. The rules and regulations of international trade become more complex every day. It is vital that every exporter and importer sophisticated or novice, outsource these functions to experts who are experienced, informed and dedicated to the ultimate success of their business partnership.</p>
            <Button1 text='Contact Us' route='/contact'/>
        </div>
        <div className={styles.right}>
            <img src={AboutImg.src} className={styles.img} alt="" />
        </div>
      </div>
      
    <div className={styles.space}></div>

      <div className={styles.profile}>
      <p className={styles.team} style={{marginBottom:'2rem'}}>Team</p>
      <div className={styles2.container}> 
    <div className={styles2.card2_contact} style={{textAlign: 'center', marginBottom:'2rem'}}>
        <div className={styles2.name}><p>MR. SUNIL KUMAR</p></div>
        <div className={styles2.description}>
        <p>Managing Director</p>
        </div>
    </div>
    <div className={styles2.card1_contact} style={{textAlign: 'center', marginBottom:'2rem'}}>
        <div className={styles2.name}><p>MR. ARUN KUMAR</p></div>
        <div className={styles2.description}><p>
            Managing Director
        </p>
        </div>
    </div>
    </div>
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
        <div className={styles.left_info2}>
            <img src={Hero.src} className={styles.hero_img} alt="" />
        </div>
        <div className={styles.right_info2}>
        <div className={styles.heading_container}> 
            <p className={styles.heading}>WHAT CAN WE DO FOR YOU?</p>
        </div>
            <p className={styles.history_desc}>We review the transportation needs of our associates in order to provide tailor-made cost-effective shipping system so that the entire responsibility for the shipment is taken over by us from the moment goods are collected from shipper’s warehouse/factory.
To this end, we stand committed.</p>
            <Button1 text='Services' route='/'/>
        </div>
      </div>

    <div className={styles.space}></div>

    <div className={styles.history}>
    <div className={styles.history_heading_container}> 
        <p className={styles.history_heading}>SPECIALISATION VALUE FOR MONEY AND TIME</p>
    </div>
    <div className={styles.history_desc}> 
        <p>Ever fast Freight Forwarders Pvt. Ltd., was founded in 1997 with motive to OFFER PEACE OF MIND, is an IATA recognized freight forwarder and are ISO 9001:2008 certified company by URS. We specialize in air, sea, export, and imports. We strongly believe that we are into communication business and transportation is part of it. Equipped with the array of services we are well prepared to accept any challenges evolved from current market trends and Endeavour to encourage your aspirations. We value time. The rules and regulations of international trade become more complex every day. It is vital that every exporter and importer sophisticated or novice, outsource these functions to experts who are experienced, informed and dedicated to the ultimate success of their business partnership.</p>
    </div>
    </div>
    </div>
  )
}

export default index
