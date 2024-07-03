import React from 'react'
import styles from './style.module.css'
import { Container } from '../../../../components/layout'
import { svgs } from '../../../../assets/svg'

export function Leading() {
  return (
    <section className={styles.values}>
      <Container maxWidth='md'>
        <div className={styles.item}>
          <div className={styles.item__img}>
            <img src={svgs.aboutDrawn} alt={svgs.aboutDrawn} />
          </div>
          <div className={styles.item__content}>
            <h3>Leading the global web intelligence market</h3>
            <p>922S5 continues growing and bringing innovation to the web intelligence collection industry.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
