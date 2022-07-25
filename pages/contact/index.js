import { useState } from 'react'

import { IoMdCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import SubHeading from '../../component/subheading/SubHeading'

import message from '../../assets/images/message.png'
import hand from '../../assets/images/hand.png'
import earth from '../../assets/images/earth.png'

import styles from './contact.module.css'

function Contact() {

    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	function handleSubmit(e) {
		e.preventDefault()
	}

    return (
		<div className={styles.container}>
			<div className={styles.contact_us}>
				<div className={styles.contact_us_left}>
					<div>
						<SubHeading title='Get in touch' icon={hand.src} />
						<div className={styles.git_content}>
							<div className={styles.contact}>
								<div className={styles.contact_icon_wrapper}>
									<IoMdCall className={styles.contact_icon}/>
								</div>
								<div className={styles.contact_details}>
									<h5>Hima K Vasudevan</h5>
									<p>+91 85929 93253</p>
								</div>
							</div>
							<div className={styles.contact}>
								<div className={styles.contact_icon_wrapper}>
									<IoMdCall className={styles.contact_icon}/>
								</div>
								<div className={styles.contact_details}>
									<h5>Vishnu Vijay</h5>
									<p>+91 90615 88365</p>
								</div>
							</div>
							<div className={styles.contact}>
								<div className={styles.contact_icon_wrapper}>
									<MdEmail className={styles.contact_icon}/>
								</div>
								<div className={styles.contact_details}>
									<h5>Email</h5>
									<p>tathva@nitc.ac.in</p>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.social}>
						<SubHeading title='Social' icon={earth.src} />
						<div className={styles.social_icons_wrapper}>
							<a href='https://www.instagram.com/tathva_nitcalicut/' target='_blank' rel='noreferrer noopener'>
								<div className={`${styles.contact_icon_wrapper} ${styles.social_icon}`}>
									<FaInstagram className={styles.contact_icon}/>
								</div>
							</a>
							<a href='https://www.facebook.com/tathva' target='_blank' rel='noreferrer noopener'>
								<div className={`${styles.contact_icon_wrapper} ${styles.social_icon}`}>
									<FaFacebook className={styles.contact_icon}/>
								</div>
							</a>
							<a href='https://twitter.com/tathva' target='_blank' rel='noreferrer noopener'>
								<div className={`${styles.contact_icon_wrapper} ${styles.social_icon}`}>
									<FaTwitter className={styles.contact_icon}/>
								</div>
							</a>
						</div>
					</div>
				</div>

				<form className={styles.contact_us_right} onSubmit={handleSubmit}>
					<SubHeading title='Message' icon={message.src} />

					<fieldset>
						<label>Name</label>
						<input
							type='text'
							name='name'
							placeholder='Enter your name'
							autoComplete='off'
							required
							value={form.name}
							onChange={handleChange}
						/>
					</fieldset>
					<fieldset>
						<label>Email</label>
						<input
							type='email'
							name='email'
							placeholder='Enter your email'
							autoComplete='off'
							value={form.email}
							onChange={handleChange}
							required
						/>
					</fieldset>
					<fieldset>
						<label>Message</label>
						<textarea placeholder='Enter message' name='message' value={form.message} onChange={handleChange} required></textarea>
					</fieldset>
					<button type='submit' className={styles.btn_secondary}>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
