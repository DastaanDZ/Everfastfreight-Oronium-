import React from "react";
import data from "../../assets/data/Services";
import styles from "./services.module.css";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Button2 from "../button2/Button2";

const index = () => {
  const title = [
    "air-freight",
    "sea-freight",
    "warehousing",
    "custom-clearance",
    "door-to-door",
    "road-transport ",
    "project-forwarding",
  ];
  return (
    <>
      <div className={styles.container} id='services'>
        <div className={styles.title}>
          <p className={styles.heading}>Services</p>
          <p className={styles.desc}>
            Nibh massa ut sodales amet ac eleifend non tempor.
          </p>
          <Link href='/contact'> 
          <div className={styles.btn}>
            <p>GET IN TOUCH</p>
            <BsArrowRight />
          </div>
          </Link>
        </div>
        <div className={styles.space}></div>

        <div className={styles.info}>
          {data.map((items, index) => {
            return (
              <Link href={`/services/${title[index]}`} key={index}>
                <div className={styles.content}>
                  <div className={styles.left}>
                    <img src={items.pic.src} className={styles.pic} alt="" />
                    <p className={styles.services_types}>{items.title}</p>
                  </div>
                  <div className={styles.right}>
                    <p className={styles.services_info}>{items.info}</p>
                    <Button2/>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;
