import lottie from 'lottie-web'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { lottieAnimations } from '../../../../assets/lottie'
import { svgs } from '../../../../assets/svg'
import HeroCircle from '../../../../assets/svg/heroCircle'
import { Container } from '../../../../components/layout'
import { Button } from '../../../../components/UI'
import styles from './style.module.css'

export function Hero() {
  const { t } = useTranslation()
  const [exchangeImage, setExchangeImage] = useState<string | null>(null)
  const [protectionImage, setProtectionImage] = useState<string | null>(null)
  const [energyImage, setEnergyImage] = useState<string | null>(null)

  const loadLottieFirstFrame = (animationData: any, width: number, height: number): Promise<string> => {
    return new Promise((resolve) => {
      const container = document.createElement('div')
      container.style.width = `${width}px`
      container.style.height = `${height}px`
      container.style.position = 'absolute'
      container.style.top = '-9999px' // Hide the container
      document.body.appendChild(container)

      const animation = lottie.loadAnimation({
        container: container,
        renderer: 'canvas',
        loop: false,
        autoplay: false,
        animationData: animationData
      })

      animation.addEventListener('DOMLoaded', () => {
        animation.goToAndStop(0, true)

        setTimeout(() => {
          const canvas = container.querySelector('canvas')
          if (canvas) {
            const dataUrl = canvas.toDataURL()
            document.body.removeChild(container)
            resolve(dataUrl)
          }
        }, 100)
      })
    })
  }

  useEffect(() => {
    const loadImages = async () => {
      const exchange = await loadLottieFirstFrame(lottieAnimations.exchange, 70, 70)
      setExchangeImage(exchange)
      const protection = await loadLottieFirstFrame(lottieAnimations.protection, 70, 70)
      setProtectionImage(protection)
      const energy = await loadLottieFirstFrame(lottieAnimations.energy, 70, 70)
      setEnergyImage(energy)
    }

    loadImages()
  }, [])

  return (
    <section className={styles.hero}>
      <Container maxWidth='lg'>
        <div className={styles.hero__wrap}>
          <div className={styles.hero__top}>
            <h1 className={styles.hero__title}>
              <span>{t('hero.title')} </span>
              <br />
              <span> {t('hero.subtitle')}</span>
            </h1>
            <h3 className={styles.hero__desc}>{t('hero.description')}</h3>
            <Button width={202}>{t('hero.getStarted')}</Button>
            <div className={styles.hero__logo__wrap}>
              <p>{t('hero.asSeenOn')}</p>
              <div className={styles.hero__logos}>
                <div className={styles.hero__logo}>
                  <img src={svgs.fcmagLogo} alt='' />
                </div>
                <div className={styles.hero__logo}>
                  <img src={svgs.techradar} alt='' />
                </div>
                <div className={styles.hero__logo}>
                  <img src={svgs.techAdvisor} alt='' />
                </div>
                <div className={styles.hero__logo}>
                  <img src={svgs.hackerNoon} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.hero__bottom}>
            <div className={styles.hero__item}>
              <div className={styles.hero__item__img}>
                {exchangeImage && <img src={exchangeImage} alt='Exchange' style={{ width: '70px', height: '70px' }} />}
              </div>
              <div className={styles.hero__item__content}>
                <p className={styles.hero__item__name}>{t('hero.proxyTransparent')}</p>
                <p className={styles.hero__item__desc}>{t('hero.proxyTransparentDesc')}</p>
              </div>
            </div>
            <div className={styles.hero__item}>
              <div className={styles.hero__item__img}>
                {protectionImage && (
                  <img src={protectionImage} alt='Protection' style={{ width: '70px', height: '70px' }} />
                )}
              </div>
              <div className={styles.hero__item__content}>
                <p className={styles.hero__item__name}>{t('hero.noUsageLogs')}</p>
                <p className={styles.hero__item__desc}>{t('hero.noUsageLogsDesc')}</p>
              </div>
            </div>
            <div className={styles.hero__item}>
              <div className={styles.hero__item__img}>
                {energyImage && <img src={energyImage} alt='Energy' style={{ width: '70px', height: '70px' }} />}
              </div>
              <div className={styles.hero__item__content}>
                <p className={styles.hero__item__name}>{t('hero.highSpeed')}</p>
                <p className={styles.hero__item__desc}>{t('hero.highSpeedDesc')}</p>
              </div>
            </div>
          </div>
          <div className={styles.hero__deco}>
            <HeroCircle />
          </div>
        </div>
      </Container>
    </section>
  )
}
