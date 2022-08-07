import React from "react";
import styles from "./profilecard.module.css";

const ProfileCard = ({ img, name, desc }) => {
  return (
    <div className={styles.container}>
      {/* <img src={img} className={styles.img} alt="" /> */}
      <p className={styles.name}>{name}</p>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default ProfileCard;
