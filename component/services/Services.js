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
      <div className={styles.container} id="services">
        <div className={styles.title}>
          <p className={styles.heading}>Services</p>
          <p className={styles.desc}></p>
          <Link href="/contact">
            <div className={styles.btn}>
              <p>GET IN TOUCH</p>
              <BsArrowRight />
            </div>
          </Link>
        </div>
        <div className={styles.space}></div>

        <div className={styles.info}>
          {data.map((items) => {
            return (
              <div className={styles.content} key={items.index}>
                <div className={styles.left}>
                  <img src={items.pic} className={styles.pic} alt="" />
                  <p className={styles.services_types}>{items.title}</p>
                </div>
                <Link href={`/services/${title[items.index]}`}>
                  <div className={styles.right}>
                    <p className={styles.services_info}>{items.info}</p>
                    <Button2 />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;
