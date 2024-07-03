import React from 'react'
import styles from './style.module.css'
import { svgs } from '../../../../assets/svg'
export function AboutUs() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutUs__content}>
          <h2 className={styles.aboutUs__text}>About Us</h2>
          <p>922S5 is dedicated to providing customers a full range of IP address solutions.</p>
          <p>
            922proxy.com is the most trusted proxy provider in the world, and the reason is simple. We are privacy
            experts with more than 200 million residential IP addresses from around the world in 190+ countries and a
            proven track record of putting privacy first.
          </p>
        </div>
        <div className={styles.aboutUs__img}>
          <img src={svgs.aboutUs} alt='' />
        </div>
      </div>
    </section>
  )
}
