import React, { useEffect, useRef, useState } from 'react'
import { Container } from '../container'
import styles from './style.module.css'
import { Button } from '../../UI'
import classNames from 'classnames'
import { imgs } from '../../../assets/imgs'

export function Header() {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState('1200px')
console.log(width)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 100
      const newWidth = Math.max(1000, 1200 - (200 * scrollY) / maxScroll)

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
              <div className={styles.navbarLogo}>
                <img src={imgs.logo} alt='logo' />
              </div>
            </div>

            <ul className={styles.navbarMenu}>
              <li className={styles.navbarMenuItem}>
                <a onClick={handleRemoveHambuger} href='#' className={classNames(styles.navbarMenuLink, styles.textSM)}>
                  Pricing
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a onClick={handleRemoveHambuger} href='#' className={classNames(styles.navbarMenuLink, styles.textSM)}>
                  Proxies
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a onClick={handleRemoveHambuger} href='#' className={classNames(styles.navbarMenuLink, styles.textSM)}>
                  Case study
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a onClick={handleRemoveHambuger} href='#' className={classNames(styles.navbarMenuLink, styles.textSM)}>
                  Affiliate
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a onClick={handleRemoveHambuger} href='#' className={classNames(styles.navbarMenuLink, styles.textSM)}>
                  Download
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a onClick={handleRemoveHambuger} href='#' className={classNames(styles.navbarMenuLink, styles.textSM)}>
                  About us
                </a>
              </li>
              <li className={styles.navbarMenuItem}>
                <a onClick={handleRemoveHambuger} href='#' className={classNames(styles.navbarMenuLink, styles.textSM)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <Button variant={width === "1000px" ? "contained"  : "outlined"}>Login Dashboard</Button>
        </div>
      </Container>
    </header>
  )
}
