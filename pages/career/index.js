import React from "react";
import styles from "../aboutus/aboutus.module.css";
import AboutImg from "../../assets/images/aboutus.jpg";
import Button1 from "../../component/button1/Button1";
import styles2 from "../contact/contact.module.css";
const index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.left}>
            <p className={styles.heading}>Career</p>
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              repellendus nihil eveniet ut sit? Qui repellat, maxime atque alias
              dolores iste esse quam labore reprehenderit, officiis culpa dicta
              eos ullam!
            </p>
            <Button1 text="Explore" route="/" />
          </div>
          <div className={styles.right}>
            <img src={AboutImg.src} className={styles.img} alt="" />
          </div>
        </div>
        <form className={styles2.contact_us_right}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
              required
            />
          </fieldset>
          <fieldset>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              autoComplete="off"
              required
            />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
              required
            />
          </fieldset>
          <fieldset>
            <label>Message</label>
            <textarea
              placeholder="Enter message"
              name="message"
              required
            ></textarea>
          </fieldset>
          <button type="submit" className={styles2.btn_secondary}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default index;
