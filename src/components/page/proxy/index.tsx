import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { imgs } from '../../../assets/imgs';
import { svgs } from '../../../assets/svg';
import { Container } from '../../layout';
import styles from './style.module.css';
import lottieAnimation from '../../../assets/lottie/test.json'; // Adjust the path to your Lottie JSON file

export default function Proxy() {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: lottieAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      });
    }

    return () => {
      if (animationContainer.current) {
        lottie.destroy();
      }
    };
  }, []);

  const data = [
    {
      id: 1,
      img: svgs.dataColection,
      text: 'Data collection'
    },
    {
      id: 6,
      img: svgs.brand,
      text: 'Brand Protection'
    },
    {
      id: 11,
      img: svgs.etsy,
      text: 'Etsy'
    },
    {
      id: 2,
      img: svgs.marketing,
      text: 'Marketing Research'
    },
    {
      id: 7,
      img: svgs.seo,
      text: 'SEO Optimization'
    },
    {
      id: 12,
      img: imgs.youtube,
      text: 'Youtube'
    },
    {
      id: 3,
      img: svgs.pricing,
      text: 'Pricing Monitoring'
    },
    {
      id: 8,
      img: svgs.socialMedia,
      text: 'Social Media'
    },
    {
      id: 13,
      img: imgs.reddit,
      text: 'Reddit'
    },
    {
      id: 4,
      img: svgs.veri,
      text: 'Verification'
    },
    {
      id: 9,
      img: svgs.instagram,
      text: 'Instagram'
    },
    {
      id: 14,
      img: imgs.gg,
      text: 'Google'
    },
    {
      id: 5,
      img: svgs.snap,
      text: 'Snap Up Merchandise'
    },
    {
      id: 10,
      img: imgs.amazon,
      text: 'Amazon'
    },
    {
      id: 15,
      img: imgs.tiktok,
      text: 'Tiktok'
    }
  ];

  return (
    <section className={styles.proxy}>
      <Container maxWidth='lg'>
        <h2>Proxy Usercase</h2>
        <p className={styles.proxy__desc}>Few among the multiple use cases that could be solved with our products</p>
        <div className={styles.proxy__wrap}>
          <div className={styles.proxy__img}>
            <div ref={animationContainer} style={{ width: '480px', height: '480px' }}></div>
          </div>
          <div className={styles.proxy__img}>
            <img src={imgs.usercaseDeco} alt='' />
          </div>
          <div className={styles.proxy__list}>
            {data.map((item, index: number) => (
              <div key={index} className={styles.proxy__item}>
                <img src={item?.img} alt='' />
                <p>{item?.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}