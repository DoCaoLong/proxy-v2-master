import React from 'react'
import styles from './style.module.css'
import { Container } from '../../../../components/layout'
import { svgs } from '../../../../assets/svg'

export function Value() {
  return (
    <section className={styles.values}>
      <Container maxWidth='md'>
        <div className={styles.item}>
          <div className={styles.item__img}>
            <img src={svgs.aboutOur} alt={svgs.aboutOur} />
          </div>
          <div className={styles.item__content}>
            <h3>Our Values</h3>
            <p>
              As a leading company in the proxy and web intelligence industry, we ensure that the highest business
              ethics standards lead all our operations. Our core values guide us toward achieving our mission.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
