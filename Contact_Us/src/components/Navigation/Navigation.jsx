import React from 'react'
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className='logo'>
            <img src="images/contact-logo.png" alt="Logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
    </nav>
  )
}

export default Navigation