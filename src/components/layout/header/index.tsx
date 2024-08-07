import { useEffect, useRef, useState } from 'react'
import { Container } from '../container'
import styles from './style.module.css'
import { Button } from '../../UI'
import classNames from 'classnames'
import { LanguageSwitcher } from '../languageSwitcher'
import { useMediaQuery } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { svgs } from '../../../assets/svg'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { t } = useTranslation()
  const headerRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState('1200px')
  const IS_MB = useMediaQuery('(max-width:767px)')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 100
      const newWidth = Math.max(1070, 1200 - (100 * scrollY) / maxScroll)

      setWidth(`${newWidth}px`)

      if (headerRef.current) {
        if (scrollY > 100) {
          headerRef.current.classList.add(styles.active)
        } else {
          headerRef.current.classList.remove(styles.active)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleActiveHambuger = () => {
    document.body.classList.toggle(styles.body_active)
  }

  const handleRemoveHambuger = () => {
    document.body.classList.remove(styles.body_active)
  }

  return (
    <header
      ref={headerRef}
      className={styles.header}
      style={{
        maxWidth: width,
        transition: 'max-width 0.3s ease-in-out'
      }}
    >
      <Container maxWidth='lg'>
        <div className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <div className={styles.navbarLeft__logo}>
              <div onClick={handleActiveHambuger} className={styles.hamburger} id={styles.hamburger}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </div>
              <Link to='/' className={styles.navbarLogo}>
                <img src={svgs.logo} alt='logo' />
              </Link>
            </div>

            <ul className={styles.navbarMenu}>
              <li className={classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '#' })}>
                <Link
                  onClick={handleRemoveHambuger}
                  to='#'
                  className={classNames(styles.navbarMenuLink, styles.textSM)}
                >
                  {t('header.pricing')}
                </Link>
              </li>
              <li className={classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '#' })}>
                <Link
                  onClick={handleRemoveHambuger}
                  to='#'
                  className={classNames(styles.navbarMenuLink, styles.textSM)}
                >
                  {t('header.proxies')}
                </Link>
              </li>
              <li className={classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '#' })}>
                <Link
                  onClick={handleRemoveHambuger}
                  to='#'
                  className={classNames(styles.navbarMenuLink, styles.textSM)}
                >
                  {t('header.caseStudy')}
                </Link>
              </li>
              <li className={classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '#' })}>
                <Link
                  onClick={handleRemoveHambuger}
                  to='#'
                  className={classNames(styles.navbarMenuLink, styles.textSM)}
                >
                  {t('header.affiliate')}
                </Link>
              </li>
              <li className={classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '/download' })}>
                <Link
                  onClick={handleRemoveHambuger}
                  to='/download'
                  className={classNames(styles.navbarMenuLink, styles.textSM)}
                >
                  {t('header.download')}
                </Link>
              </li>
              <li className={classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '/about' })}>
                <Link
                  onClick={handleRemoveHambuger}
                  to='/about'
                  className={classNames(styles.navbarMenuLink, styles.textSM)}
                >
                  {t('header.aboutUs')}
                </Link>
              </li>
              <li className={classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '#' })}>
                <Link
                  onClick={handleRemoveHambuger}
                  to='#'
                  className={classNames(styles.navbarMenuLink, styles.textSM)}
                >
                  {t('header.contact')}
                </Link>
              </li>
              <li className={styles.navbarMenuItem}>
                <div onClick={handleRemoveHambuger} className={classNames(styles.navbarMenuLink, styles.textSM)}>
                  {IS_MB && <LanguageSwitcher />}
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.navbarMenuBtns}>
            {!IS_MB && <LanguageSwitcher />}
            <Button variant={width === '1070px' ? 'contained' : 'outlined'}>{t('header.loginDashboard')}</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
