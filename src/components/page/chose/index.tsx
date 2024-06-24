import { Container } from '../../layout'
import styles from './style.module.css'
import classNames from 'classnames'
import { svgs } from '../../../assets/svg'
import { Button } from '../../UI'
export default function Chose() {
  return (
    <section className={styles.chose}>
      <Container maxWidth='lg'>
        <div className={styles.chose__wrap}>
          <div className={styles.chose__left}>
            <h2 className={styles.chose__title}>Chose Your Plan</h2>
            <div className={styles.chose__residential}>
              <p className={styles.chose__text}>Residential Proxies</p>
              <p className={styles.chose__desc}>
                Unlock the power of residential proxies with our cutting-edge solutions tailored for your browsing
                needs. Experience seamless anonymity and reliability with our high-quality proxy services.
              </p>
            </div>
            <div className={styles.chose__userCase}>
              <p className={classNames(styles.chose__text, styles.tertiary__cl)}>User cases</p>
              <div className={styles.chose__userCase__list}>
                <div className={styles.chose__userCase__row}>
                  <div className={styles.chose__userCase__item}>
                    <img src={svgs.arrow} alt='' />
                    <p className={styles.chose__userCase__name}>Ad Verification</p>
                  </div>
                  <div className={styles.chose__userCase__item}>
                    <img src={svgs.arrow} alt='' />
                    <p className={styles.chose__userCase__name}>SERP Tracking</p>
                  </div>
                </div>
                <div className={styles.chose__userCase__row}>
                  <div className={styles.chose__userCase__item}>
                    <img src={svgs.arrow} alt='' />
                    <p className={styles.chose__userCase__name}>Social Media</p>
                  </div>
                  <div className={styles.chose__userCase__item}>
                    <img src={svgs.arrow} alt='' />
                    <p className={styles.chose__userCase__name}>Brand Protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.chose__right}>
            <div className={styles.chose__right__top}>
              <div className={styles.chose__right__head}>
                <p>Plan price start from</p>
                {/* <img src={svgs.arrowBlack} alt='' /> */}
              </div>
              <div className={styles.chose__right__price}>
                <p>$2.00</p>
                <span>/ GB</span>
              </div>
            </div>
            <div className={styles.chose__right__mid}>
              <div className={styles.chose__right__list}>
                <div className={styles.chose__right__item}>
                  <input checked type='checkbox' />
                  <p>
                    High quality
                    <span className={styles.text__gradient__tertiary}> 7M+ IPs</span>
                  </p>
                </div>
                <div className={styles.chose__right__item}>
                  <input checked type='checkbox' />
                  <p>
                    <span className={styles.text__gradient__secondary}> 195+ </span>
                    country targetting
                  </p>
                </div>
                <div className={styles.chose__right__item}>
                  <input checked type='checkbox' />
                  <p>Dedicated residential proxies</p>
                </div>
                <div className={styles.chose__right__item}>
                  <input checked type='checkbox' />
                  <p>
                    <span className={styles.text__gradient__secondary}>HTTP(s) </span>
                    and
                    <span className={styles.text__gradient__tertiary}> SOCKS5 </span>
                    support
                  </p>
                </div>
                <div className={styles.chose__right__item}>
                  <input checked type='checkbox' />
                  <p>Non-Expricing Traffic</p>
                </div>
              </div>
            </div>
            <Button width={'100%'} variant='contained'>
              Buy Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
