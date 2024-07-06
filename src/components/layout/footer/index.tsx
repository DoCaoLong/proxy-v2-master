import styles from './style.module.css'
import { Container } from '../container'
import { svgs } from '../../../assets/svg'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <section className={styles.footer}>
      <Container maxWidth='lg'>
        <div className={styles.footer__wrap}>
          <div className={styles.footer__left}>
            <Link to='/' className={styles.footer__logo}>
              <img src={svgs.logoDark} alt='' />
            </Link>
            <a href='mailto:info@proxies.com' className={styles.footer__mail}>
              info@proxies.com
            </a>
            <div className={styles.footer__socials}>
              <div className={styles.footer__social}>
                <img src={svgs.footerFacebook} alt='' />
              </div>
              <div className={styles.footer__social}>
                <img src={svgs.footerInstagram} alt='' />
              </div>
              <div className={styles.footer__social}>
                <img src={svgs.footerX} alt='' />
              </div>
            </div>
          </div>
          <div className={styles.footer__right}>
            <ul className={styles.footer__category}>
              <h6>Service and Terms</h6>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='#'>Contact</Link>
              </li>
              <li>
                <Link to='#'>Privacy Policy</Link>
              </li>
              <li>
                <Link to='#'>Cookie Policy</Link>
              </li>
              <li>
                <Link to='#'>Terms of Service</Link>
              </li>
              <li>
                <Link to='#'>Delivery Agreement</Link>
              </li>
              <li>
                <Link to='#'>Refund Policy</Link>
              </li>
            </ul>
            <ul className={styles.footer__category}>
              <h6>Proxies</h6>
              <li>
                <Link to='#'>Static Residential Proxies</Link>
              </li>
              <li>
                <Link to='#'>Rotate Residential Proxies</Link>
              </li>
            </ul>
            <ul className={styles.footer__category}>
              <h6>Affiliate</h6>
              <li>
                <Link to='#'>Reseller Program</Link>
              </li>
              <li>
                <Link to='#'>Link Program</Link>
              </li>
            </ul>
            <ul className={styles.footer__category}>
              <h6>Help Center</h6>
              <li>
                <Link to='#'>FAQ</Link>
              </li>
              <li>
                <Link to='#'>User Guide</Link>
              </li>
              <li>
                <Link to='#'>Tutorial Video</Link>
              </li>
              <li>
                <Link to='#'>Sitemap</Link>
              </li>
            </ul>
            <ul className={styles.footer__category}>
              <h6>Case Study</h6>
              <li>
                <Link to='#'>Crawl Data</Link>
              </li>
              <li>
                <Link to='#'>SEO Traffic</Link>
              </li>
              <li>
                <Link to='#'>Optimize Web Scraping</Link>
              </li>
              <li>
                <Link to='#'>Automate Tasks That Require IP Rotation</Link>
              </li>
              <li>
                <Link to='#'>Bypass Web Block</Link>
              </li>
              <li>
                <Link to='#'>Bypass Network Traffic</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
