import { useTranslation } from 'react-i18next'
import { svgs } from '../../../../assets/svg'
import { Container } from '../../../../components/layout'
import { Button } from '../../../../components/UI'
import styles from './style.module.css'

export function Contact() {
  const { t } = useTranslation()

  return (
    <section className={styles.contact}>
      <Container maxWidth='lg'>
        <h2>{t('contact.contactUs')}</h2>
        <p className={styles.contact__title}>{t('contact.contactTitle')}</p>
        <div className={styles.contact__warp}>
          <div className={styles.contact__left}>
            <div className={styles.contact__left__head}>
              <div>
                <p className={styles.contact__text}>{t('contact.gotQuestion')}</p>
                <p className={styles.contact__desc}>
                  {t('contact.weAreHereToHelp')} <a href='#'>contact@proxy.com</a>
                </p>
              </div>
              <div>
                <p className={styles.contact__text}>{t('contact.greaterCooperation')}</p>
                <p className={styles.contact__desc}>
                  {t('contact.contactSalesTeam')} <a href='#'>sales@proxy.com</a>
                </p>
              </div>
            </div>
            <div className={styles.contact__left__bottom}>
              <div className={styles.contact__left__bottom__list}>
                <div className={styles.contact__left__bottom__item}>
                  <img src={svgs.mail} alt='' />
                  <p>info@proxies.com</p>
                </div>
                <div className={styles.contact__left__bottom__item}>
                  <img src={svgs.phone} alt='' />
                  <p>+84 000 000</p>
                </div>
                <div className={styles.contact__left__bottom__item}>
                  <img src={svgs.home} alt='' />
                  <p>123 Some St, City SMTH 11000 US</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contact__right}>
            <form className={styles.contact__form} action='#'>
              <input placeholder={t('contact.name')} type='text' />
              <input placeholder={t('contact.email')} type='text' />
              <textarea placeholder={t('contact.leaveYourMessage')} name='' id=''></textarea>
              <div className={styles.checkbox}>
                <input checked type='checkbox' readOnly />
                <p>{t('contact.acceptPrivatePolicy')}</p>
              </div>
              <Button height={60} width={'100%'} variant='contained'>
                {t('contact.sendNow')}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
