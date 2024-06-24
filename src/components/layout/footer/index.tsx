import styles from './style.module.css'
import { Container } from '../container'
import { svgs } from '../../../assets/svg'
import { imgs } from '../../../assets/imgs'
export default function Footer() {
  return (
    <section className={styles.footer}>
      <Container maxWidth='lg'>
        <div className={styles.footer__wrap}>
          <div className={styles.footer__left}>
            <div className={styles.footer__logo}>
              <img src={imgs.logo} alt='' />
            </div>
            <a href='#' className={styles.footer__mail}>
              info@proxies.com
            </a>
            <div className={styles.footer__socials}>
              <div className={styles.footer__social}>
                <img src={svgs.mess} alt='' />
              </div>
              <div className={styles.footer__social}>
                <img src={svgs.instagramColor} alt='' />
              </div>
              <div className={styles.footer__social}>
                <img src={svgs.wha} alt='' />
              </div>
              <div className={styles.footer__social}>
                <img src={svgs.face} alt='' />
              </div>
            </div>
          </div>
          <div className={styles.footer__right}>
            <ul className={styles.footer__category}>
              <li>Service and Terms</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms of Service</li>
              <li>Delivery Agreement</li>
              <li>Refund Policy </li>
            </ul>
            <ul className={styles.footer__category}>
              <li>Proxies</li>
              <li>Static Residential Proxies</li>
              <li>Rotate Residential Proxies</li>
            </ul>
            <ul className={styles.footer__category}>
              <li>Affiliate</li>
              <li>Reseller Program</li>
              <li>Link Program</li>
            </ul>
            <ul className={styles.footer__category}>
              <li>Help Center</li>
              <li>FAQ</li>
              <li>User Guide</li>
              <li>Tutorial Video</li>
              <li>Sitemap</li>
            </ul>
            <ul className={styles.footer__category}>
              <li>Case Study</li>
              <li>Crawl Data</li>
              <li>SEO Traffic</li>
              <li>Optimize Web Scraping</li>
              <li>Automate Tasks That Require IP Rotation</li>
              <li>Bypass Web Block</li>
              <li>Bypass Network Traffic</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
