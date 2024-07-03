import styles from './style.module.css'
import { Container } from '../../../../components/layout'
import { Button } from '../../../../components/UI'
import { imgs } from '../../../../assets/imgs'
import classNames from 'classnames'
export function Download() {
  return (
    <section className={styles.download}>
      <Container maxWidth='lg'>
        <h2>Download Proxy app</h2>
        <div className={styles.download__wrap}>
          <div className={classNames(styles.download__card)}>
            <img src={imgs.macos} alt='macos' />
            <div>
              <p className={styles.download__text}>MacOS</p>
              <p className={styles.download__desc}>MacOS Operating system 10.1 or higher</p>
            </div>
            <Button width={'100%'} variant='outlined'>
              Download Now
            </Button>
          </div>
          <div className={styles.download__card}>
            <img src={imgs.windown} alt='macos' />
            <div>
              <p className={styles.download__text}>WindowOS</p>
              <p className={styles.download__desc}>WindowOS Operating system 12.1 or higher</p>
            </div>
            <Button width={'100%'} variant='outlined'>
              Download Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
