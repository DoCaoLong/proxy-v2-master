import { svgs } from '../../../../assets/svg'
import { Container } from '../../../../components/layout'
import { Button } from '../../../../components/UI'
import styles from './style.module.css'
export function Contact() {
  return (
    <section className={styles.contact}>
      <Container maxWidth='lg'>
        <h2>Contact Us Proxy </h2>
        <p className={styles.contact__title}>
          Hi, need help from real people, not bots? Connect us experts for quick, effective support
        </p>
        <div className={styles.contact__warp}>
          <div className={styles.contact__left}>
            <div className={styles.contact__left__head}>
              <div>
                <p className={styles.contact__text}>Got a Question?</p>
                <p className={styles.contact__desc}>
                  We’re here to help and answer any questions you might have. We look forward to hearing from you. Fill
                  in this form or send as an email at<a href='#'> contact@proxy.com</a>
                </p>
              </div>
              <div>
                <p className={styles.contact__text}>Greater cooperation?</p>
                <p className={styles.contact__desc}>
                  Send an email to contact the sales team <a href='#'>sales@proxy.com</a>
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
              <input placeholder='Name' type='text' />
              <input placeholder='Gmail' type='text' />
              <textarea placeholder='Leave Your Message' name='' id=''></textarea>
              <div className={styles.checkbox}>
                <input checked type='checkbox' />
                <p>Accept our Private Policy</p>
              </div>
              <Button width={'100%'} variant='contained'>
                SEND NOW
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
