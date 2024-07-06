import React from 'react'
import styles from './style.module.css'
import { Container } from '../../../../components/layout'
import { gif } from '../../../../assets/gif'
export function Strengths() {
  interface IData {
    id: number
    name: string
    img: string
    desc: string
  }

  const data: IData[] = [
    {
      id: 1,
      name: 'We Specialize in IP Networking',
      img: gif.home,
      desc: 'Check out 922S5 for all your IP address needs! 922proxy.com is the go-to global proxy provider, famous for their privacy know-how and a whopping 200 million residential IP addresses across 190+ countries.'
    },
    {
      id: 2,
      name: 'Trust 922S5 For Fast,Reliable IP Proxy Servic',
      img: gif.start,
      desc: 'Check out 922S5 for all your IP address needs! 922proxy.com is the go-to global proxy provider, famous for their privacy know-how and a whopping 200 million residential IP addresses across 190+ countries.'
    },
    {
      id: 3,
      name: 'We Offer More than Just IP Proxy',
      img: gif.pen,
      desc: 'Check out 922S5 for all your IP address needs! 922proxy.com is the go-to global proxy provider, famous for their privacy know-how and a whopping 200 million residential IP addresses across 190+ countries.'
    }
  ]
  return (
    <section className={styles.strengths}>
      <Container maxWidth='md'>
        <div className={styles.container}>
          <h3 className={styles.title}>Our Strengths</h3>
          <div className={styles.list}>
            {data?.map((item: IData, index: number) => (
              <div key={index} className={styles.item}>
                <div className={styles.item__img}>
                  <img src={item?.img} alt={item?.img} />
                </div>
                <div className={styles.item__content}>
                  <h3>{item?.name}</h3>
                  <h6>{item?.desc}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
