import { useState } from "react";

import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FcAddressBook, FcCallback } from "react-icons/fc";
import SubHeading from "../../component/subheading/SubHeading";

import message from "../../assets/images/message.png";
import hand from "../../assets/images/hand.png";
import earth from "../../assets/images/earth.png";
import mail from "../../assets/images/mail.png";
import phone from "../../assets/images/phone.png";

import styles from "./contact.module.css";
import axios from "axios";

import { API_URL } from "../../utils/urls";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // http://localhost:1337/admin/settings/application-infos
    const formRes = await axios.post(`${API_URL}/api/contacts`, {
      data: {
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: form.message,
      },
    });
    console.log(formRes);
  }

  return (
    <div className={styles.container}>
      <div className={styles.contact_us}>
        <div className={styles.contact_us_left}>
          <div className={styles.info}>
            <SubHeading title="Get in touch" icon={hand.src} />
            <p>
              Send us a message and we&apos;ll get in touch with you as soon as
              possible
            </p>
            <div className={styles.address}>
              <SubHeading title="Address" icon={message.src} />
              <p>Tel: + 91 120 4184500</p>
              <br></br>
              <p>
                info@everfastfreight.com Everfast Freight Forwarders Pvt. Ltd.
                A-6, 3rd Floor (The Landmark), Sector-2, Noida – 201301 (UP)
              </p>
            </div>
            <div className={styles.phone_social_container}>
              <div className={styles.phone}>
                <SubHeading title="Phone" icon={phone.src} />
                <p>+ 91 120 4184500</p>
              </div>
              <div className={styles.social}>
                <SubHeading title="Social" icon={earth.src} />
                <div className={styles.social_icons_wrapper}>
                  <a
                    href="https://www.instagram.com/tathva_nitcalicut/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      className={`${styles.contact_icon_wrapper} ${styles.social_icon} ${styles.instagram}`}
                    >
                      <FaInstagram className={styles.contact_icon} />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/Everfastfreight/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      className={`${styles.contact_icon_wrapper} ${styles.social_icon} ${styles.facebook}`}
                    >
                      <FaFacebook className={styles.contact_icon} />
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/EverfastFreight"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      className={`${styles.contact_icon_wrapper} ${styles.social_icon} ${styles.twitter}`}
                    >
                      <FaTwitter className={styles.contact_icon} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="email">
              <SubHeading title="Email" icon={mail.src} />
              <p>info@everfastfreight.com</p>
            </div>
          </div>
        </div>
        <div className={styles.form_container}>
          <form className={styles.contact_us_right} onSubmit={handleSubmit}>
            <SubHeading title="Message" icon={message.src} />

            <fieldset>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="off"
                required
                value={form.name}
                onChange={handleChange}
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
                value={form.phone}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={form.email}
                onChange={handleChange}
                required
              />
            </fieldset>
            <fieldset>
              <label>Message</label>
              <textarea
                placeholder="Enter message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </fieldset>
            <button type="submit" className={styles.btn_secondary}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
