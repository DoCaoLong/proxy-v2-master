import { useTranslation } from 'react-i18next'
import styles from './style.module.css'
import classNames from 'classnames'
import { Container } from '../../../../components/layout'
import { svgs } from '../../../../assets/svg'
import { Button } from '../../../../components/UI'

export function Chose() {
  const { t } = useTranslation()

  return (
    <section className={styles.chose}>
      <Container maxWidth='lg'>
        <div className={styles.chose__wrap}>
          <div className={styles.chose__left}>
            <h2 className={styles.chose__title}>{t('choose.chooseYourPlan')}</h2>
            <div className={styles.chose__residential}>
              <p className={styles.chose__text}>{t('choose.residentialProxies')}</p>
              <p className={styles.chose__desc}>{t('choose.description')}</p>
            </div>
            <div className={styles.chose__userCase}>
              <p className={classNames(styles.chose__text, styles.tertiary__cl)}>{t('choose.userCases')}</p>
              <div className={styles.chose__userCase__list}>
                <div className={styles.chose__userCase__row}>
                  <div className={styles.chose__userCase__item}>
                    <img src={svgs.arrow} alt='' />
                    <p className={styles.chose__userCase__name}>{t('choose.adVerification')}</p>
                  </div>
                  <div className={styles.chose__userCase__item}>
                    <img src={svgs.arrow} alt='' />
                    <p className={styles.chose__userCase__name}>{t('choose.serpTracking')}</p>
                  </div>
                </div>
                <div className={styles.chose__userCase__row}>
                  <div className={styles.chose__userCase__item}>
                    <img src={svgs.arrow} alt='' />
                    <p className={styles.chose__userCase__name}>{t('choose.socialMedia')}</p>
                  </div>
                  <div className={styles.chose__userCase__item}>
                    <img src={svgs.arrow} alt='' />
                    <p className={styles.chose__userCase__name}>{t('choose.brandProtection')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.chose__right}>
            <div className={styles.chose__right__top}>
              <div className={styles.chose__right__head}>
                <p>{t('choose.planPriceStartFrom')}</p>
              </div>
              <div className={styles.chose__right__price}>
                <p>$2.00</p>
                <span>/ GB</span>
              </div>
            </div>
            <div className={styles.chose__right__mid}>
              <div className={styles.chose__right__list}>
                <div className={styles.chose__right__item}>
                  <input checked={true} type='checkbox' readOnly />
                  <p>
                    {t('choose.highQuality')}
                    <span className={styles.text__gradient__tertiary}> 7M+ IPs</span>
                  </p>
                </div>
                <div className={styles.chose__right__item}>
                  <input checked={true} type='checkbox' readOnly />
                  <p>
                    <span className={styles.text__gradient__secondary}> 195+ </span>
                    {t('choose.countryTargeting')}
                  </p>
                </div>
                <div className={styles.chose__right__item}>
                  <input checked={true} type='checkbox' readOnly />
                  <p>{t('choose.dedicatedResidentialProxies')}</p>
                </div>
                <div className={styles.chose__right__item}>
                  <input checked={true} type='checkbox' readOnly />
                  <p>
                    <span className={styles.text__gradient__secondary}>HTTP(s) </span>
                    {t('choose.httpSupport')}
                    <span className={styles.text__gradient__tertiary}> SOCKS5 </span>
                  </p>
                </div>
                <div className={styles.chose__right__item}>
                  <input checked={true} type='checkbox' readOnly />
                  <p>{t('choose.nonExpiringTraffic')}</p>
                </div>
              </div>
            </div>
            <Button width={'100%'} variant='contained'>
              {t('choose.buyNow')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
