import React from "react";
import styles from "../aboutus/aboutus.module.css";
import AboutImg from "../../assets/images/aboutus.jpg";
import Button1 from "../../component/button1/Button1";
import styles2 from "../contact/contact.module.css";
import styles3 from './career.module.css'
import axios from 'axios'
import { API_URL } from "../../utils/urls";

import { useState } from "react";

const index = () => {

  const [form, setForm] = useState({ name: '',country: ''})

    const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	async function handleSubmit(e) {
		e.preventDefault()
		// http://localhost:1337/admin/settings/application-infos
		const formRes = await axios.post(`${API_URL}/api/careers`,{
			data: { 

				name: form.name,
				country: form.country
			}
		})
		console.log(formRes)
	}


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
        <form className={styles3.form} onSubmit={handleSubmit}>
        <p className={styles3.join_us}>Join Us</p>
        <div className={styles3.fieldset_container}> 
          <fieldset className={styles3.fieldset}>
            <label className={styles3.label}>Name</label>
            <input
              type="text"
              name="name"
              placeholder=""
              autoComplete="off"
              required
              value={form.name}
							onChange={handleChange}
              className={styles3.input}
            />
          </fieldset>
          <fieldset className={styles3.fieldset}>
            <label className={styles3.label}>Country</label>
            <input
              type="text"
              name="country"
              placeholder=""
              autoComplete="off"
              required
              value={form.country}
							onChange={handleChange}
              className={styles3.input}
            />
          </fieldset>
        </div>
          <button type="submit" className={styles2.btn_secondary}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default index;
