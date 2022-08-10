import React from "react";
import styles from "../aboutus/aboutus.module.css";
import AboutImg from "../../assets/images/aboutus.jpg";
import Button1 from "../../component/button1/Button1";
import styles2 from "../contact/contact.module.css";
import styles3 from './career.module.css'
import axios from 'axios'
import { API_URL } from "../../utils/urls";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";

function Career(){

  const [form, setForm] = useState({ name: '',phone: '',address:'',email:''})
  const [file,setFile]=useState(null)
    const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	async function handleSubmit(e) {
		e.preventDefault()
		// http://localhost:1337/admin/settings/application-infos

    const id = toast.loading("Please wait...");
		const formRes = await axios.post(`${API_URL}/api/careers`,{
			data: { 
				name: form.name,
				// country: form.country
        phone: form.phone,
        address: form.address,
        email: form.email,

			}
		})
    const form2=new FormData()
    form2.append("ref","api::career.career")
    form2.append("refId",formRes.data.data.id)
    form2.append("field","resume")
    form2.append("files", file[0])
    
    const res=await axios.post(`${API_URL}/api/upload`,form2);
    if(res.status==200){
      toast.update(id, {
        render: "Submission Added",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    }
    
	}



  return (
    <>
    <ToastContainer/>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.left}>
          <div className={styles.heading_container}> 
            <h2>Career</h2>
          </div>
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
            <label className={styles3.label}>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder=""
              autoComplete="off"
              required
              value={form.phone}
							onChange={handleChange}
              className={styles3.input}
            />
          </fieldset>
          <fieldset className={styles3.fieldset}>
            <label className={styles3.label}>Address</label>
            <input
              type="text"
              name="address"
              placeholder=""
              autoComplete="off"
              required
              value={form.address}
							onChange={handleChange}
              className={styles3.input}
            />
          </fieldset>
          <fieldset className={styles3.fieldset}>
            <label className={styles3.label}>Email Id</label>
            <input
              type="text"
              name="email"
              placeholder=""
              autoComplete="off"
              required
              value={form.email}
							onChange={handleChange}
              className={styles3.input}
            />
          </fieldset>
          <fieldset className={styles3.fieldset}>
            <label className={styles3.label}>Resume</label>
            <input
              type="file"
              name="resume"
              placeholder=""
              autoComplete="off"
              required
							onChange={(e)=>{
                setFile(e.target.files)
              }}
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

export default Career;
