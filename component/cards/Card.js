import React from "react";
import styles from "./card.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

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
        <div className={styles.card2}>
          {/* <div className={styles.bullet}><p>1</p></div> */}
          <div>
            <h2>Vision</h2>
          </div>
          <div className={styles.description}>
            <ul>
              <li>
                To be the leading service provider, distinguished by the quality
                of our services that benefits our customers
              </li>
              <li>
                Providing outstanding operational quality and flow of
                information.
              </li>
              <li>
                Providing dedicated cost effective and timely services to
                customers.
              </li>
              <li>Being a flexible, agile and innovative organization.</li>
            </ul>
          </div>
        </div>
        <div className={styles.card1}>
          {/* <div className={styles.bullet}><p>2</p></div> */}
          <div>
            <h2>Approach</h2>
          </div>
          <div className={styles.description}>
            <ul>
              <li>Starts with knowing our customers.</li>
              <li>Understanding their business.</li>
              <li>
                Understanding our customer’s current and future requirements.
              </li>
              <li>
                Designing service parameters as per customer requirements to be
                responsive, responsible, and efficient.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.card3}>
          {/* <div className={styles.bullet}><p>3</p></div> */}
          <div>
            <h2>Core Strength</h2>
          </div>
          <div className={styles.description}>
            <ul>
              <li>Cost Effective</li>
              <li>Highly Sales Driven</li>
              <li>Multi-location Presence</li>
              <li>Global Operator with Local Knowledge</li>
              <li>Young, Energetic and Dynamic Team</li>
              <li>Consumer Focused Work Ethos</li>
              <li>Multiple Product Range</li>
              <li>Software Driven</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
