import { svgs } from '../../../assets/svg'
import { Container } from '../../layout'
import styles from './style.module.css'
export default function Top() {
  const data = [
    {
      id: 1,
      img: svgs.us,
      name: 'United States',
      total: '341,785 IPs'
    },
    {
      id: 2,
      img: svgs.uk,
      name: 'United Kingdom',
      total: '293,744 IPs'
    },
    {
      id: 3,
      img: svgs.china,
      name: 'China',
      total: '189,982 IPs'
    },
    {
      id: 4,
      img: svgs.germany,
      name: 'Germany',
      total: '89,782 IPs'
    },
    {
      id: 5,
      img: svgs.canada,
      name: 'Canada',
      total: '67,882 IPs'
    },
    {
      id: 6,
      img: svgs.france,
      name: 'France',
      total: '64,934 IPs'
    }
  ]
  return (
    <section className={styles.top}>
      <Container maxWidth='lg'>
        <h2>Top Location</h2>
        <div className={styles.top__list}>
          {data.map((item, index: number) => (
            <div key={index} className={styles.top__item}>
              <div className={styles.top__img}>
                <img src={item?.img} alt='us' />
              </div>
              <p className={styles.top__name}>{item?.name}</p>
              <p className={styles.top__total}>{item?.total}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
