import styles from './faqs.module.css'
import data from '../../assets/data/FaqData'
import Accordian from '../accordian/Accordian';

const Faqs = () => {
  return (
    <>
    <div className={styles.container}> 
    <div className={styles.title}>
        <p>FAQs</p>
        <div className={styles.circle}>
            <p>5</p>
        </div>
    </div>
    <div className={styles.space}></div>
    
    <div className={styles.description}>
     {data.map((items, index) => {
       return(
                <Accordian key={index} {...items}/>
            )
        })}
    </div>
              </div>
    </>
  )
}

export default Faqs
