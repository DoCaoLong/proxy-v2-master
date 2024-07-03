import styles from './style.module.css'
import { Container } from '../../../../components/layout'
import lottie from 'lottie-web'
import { lottieAnimations } from '../../../../assets/lottie'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export function Hear() {
  const { t } = useTranslation()
  const animationContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: lottieAnimations.chat,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      })
    }

    return () => {
      if (animationContainer.current) {
        lottie.destroy()
      }
    }
  }, [])

  return (
    <section className={styles.hear}>
      <Container maxWidth='lg'>
        <div className={styles.hear__wrap}>
          <div className={styles.hear__left}>
            <h2 className={styles.hear__title}>{t('hear.hearAboutUs')}</h2>
            <p className={styles.hear__text}>{t('hear.ethicallySourced')}</p>
            <p className={styles.hear__desc}>{t('hear.largeProxyPool')}</p>
          </div>
          <div className={styles.hear__right}>
            <div ref={animationContainer} style={{ width: '255px', height: '264px' }}></div>
          </div>
        </div>
      </Container>
    </section>
  )
}
