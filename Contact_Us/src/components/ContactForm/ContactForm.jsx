import React from 'react';
import styles from "./ContactForm.module.css";
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";


const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className='{styles.contact_form}'>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
            <Button text="VIA CALL" icon={<IoCall fontSize="24px"/>} />
            <Button text="VIA EMAIL FORM" icon={<MdMessage fontSize="24px"/>} />
        </div>
        <div className='{styles.contact_image}'>

        </div>
    </section>
  )
}

export default ContactForm