import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { imgs } from '../../../../assets/imgs'
import { Container } from '../../../../components/layout'
import { Button } from '../../../../components/UI'
import styles from './style.module.css'

export function Download() {
  const { t } = useTranslation()

  return (
    <section className={styles.download}>
      <Container maxWidth='lg'>
        <h2>{t('download.downloadApp')}</h2>
        <div className={styles.download__wrap}>
          <div className={classNames(styles.download__card)}>
            <img src={imgs.macos} alt='macos' />
            <div>
              <p className={styles.download__text}>{t('download.macOS')}</p>
              <p className={styles.download__desc}>{t('download.macOSDesc')}</p>
            </div>
            <Button height={60} width={'100%'} variant='outlined'>
              {t('download.downloadNow')}
            </Button>
          </div>
          <div className={styles.download__card}>
            <img src={imgs.windown} alt='windows' />
            <div>
              <p className={styles.download__text}>{t('download.windowOS')}</p>
              <p className={styles.download__desc}>{t('download.windowOSDesc')}</p>
            </div>
            <Button height={60} width={'100%'} variant='outlined'>
              {t('download.downloadNow')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
