import styles from './faqs.module.css'
import data from '../../assets/data/FaqData'
import Accordian from '../accordian/Accordian';

const Faqs = () => {
  return (
    <>
    <div className={styles.title}>
        <p>FAQs</p>
        <div className={styles.circle}>
            <p>5</p>
        </div>
    </div>
    <div className={styles.description}>
     {data.map((items, index) => {
            return(
                <Accordian key={index} {...items}/>
            )
        })}
    </div>
    </>
  )
}

export default Faqs
