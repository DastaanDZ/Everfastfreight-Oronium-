import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from './accordian.module.css'

const Accordian = (item) => {
    // console.log('ques',ques)
    // console.log(item.ques)

    const [show,setShow] = useState(false);

    // function icon(show){
    //     switch (show) {
    //         case true:
    //             setShow(false)
    //             return (<AiOutlineMinus/>)
    //         case false:
    //             setShow(true)
    //             return (<AiOutlinePlus/>)
    //     }
    // }
  return (
    <>
    <div className={styles.ques_ans_container}> 
    <div className={styles.ques}>
        <p>{item.ques}</p>
        <div className={styles.circle} onClick={() => setShow(!show)}> 
        {show? <AiOutlineMinus/>:<AiOutlinePlus/>}
        </div> 
    </div>
    {show && <p className={styles.ans}>{item.ans}</p> }
    </div>
    </>
  )
}

export default Accordian
