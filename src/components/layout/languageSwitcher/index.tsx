import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './style.module.css'
import { svgs } from '../../../assets/svg'

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  return (
    <div className={styles.languageSwitcher}>
      <input
        type='radio'
        id='en'
        name='language'
        value='en'
        onChange={() => changeLanguage('en')}
        checked={i18n.language === 'en'}
        className={styles.languageInput}
      />
      <label htmlFor='en' className={styles.flag}>
        <img src={svgs.uk} alt='English' />
      </label>

      <input
        type='radio'
        id='vi'
        name='language'
        value='vi'
        onChange={() => changeLanguage('vi')}
        checked={i18n.language === 'vi'}
        className={styles.languageInput}
      />
      <label htmlFor='vi' className={styles.flag}>
        <img src={svgs.china} alt='Tiếng Việt' />
      </label>
    </div>
  )
}
