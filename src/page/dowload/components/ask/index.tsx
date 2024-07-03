import React, { useState } from 'react'
import { Container } from '../../../../components/layout'
import styles from './style.module.css'
import { svgs } from '../../../../assets/svg'

export function Ask() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'How do residential proxies work?',
      answer:
        'Residential proxies route the internet traffic through an intermediary server. This server changes the IP address of your connection request. Residential proxies differ from other kinds of proxies because they are connected to real mobile and desktop devices, which are used as the intermediaries for your connections.'
    },
    {
      question: 'What are the benefits of using residential proxies?',
      answer:
        'Residential proxies provide a higher level of anonymity and security, as they use real IP addresses from actual devices. They are less likely to be detected and blocked by websites, making them ideal for web scraping, accessing geo-restricted content, and more.'
    },
    {
      question: 'How to choose the right residential proxy provider?',
      answer:
        'When choosing a residential proxy provider, consider factors like the provider’s reputation, IP pool size, location coverage, speed, and pricing. It’s also important to ensure they offer reliable customer support and have a clear and transparent usage policy.'
    }
  ]

  return (
    <section className={styles.ask}>
      <Container maxWidth='md'>
        <h2 className={styles.ask__title}>Frequently Asked Questions</h2>
        <div className={styles.ask__list}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.ask__item} ${activeIndex === index ? styles.active : ''}`}>
              <div className={styles.ask__item__head} onClick={() => toggleItem(index)}>
                <h5>{faq.question}</h5>
                <img src={activeIndex === index ? svgs.minusCirlce : svgs.addCircle} alt='' />
              </div>
              <div className={`${styles.ask__item__content} ${activeIndex === index ? styles.active : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
