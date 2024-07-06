import React from 'react'
import styles from './style.module.css'
import { Container } from '../../../../components/layout'
import { gif } from '../../../../assets/gif'
export function Mission() {
  return (
    <section className={styles.mission}>
      <Container maxWidth='md'>
        <h3 className={styles.title}>Our Mission & Vision</h3>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.item__img}>
              <img src={gif.user} alt='' />
            </div>
            <div className={styles.item__content}>
              <h4>Online privacy</h4>
              <p>
                is a core value of 922proxy.com. We take our clients' privacy, security and freedom above all else. Our
                commitment to privacy is reflected in everything we do from trusted proxy protocols to our proven no
                logs policy. We also have more than 10 years of professional experience leading the proxy industry, and
                we are the undisputed privacy experts when it comes to ensuring online security and anonymity.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item__img}>
              <img src={gif.chart} alt='' />
            </div>
            <div className={styles.item__content}>
              <h4>Data leadership</h4>
              <p>
                is our mission. 922proxy.com aims to provide our customers with the best possible proxy service. For
                customer support or technical assistance, or use the 24/7 live chat feature on any of the proxy web
                pages for prompt, direct answers to your queries from real expert.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
