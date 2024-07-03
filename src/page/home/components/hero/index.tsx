import { svgs } from '../../../../assets/svg';
import HeroCircle from '../../../../assets/svg/heroCircle';
import { Container } from '../../../../components/layout';
import { Button } from '../../../../components/UI';
import styles from './style.module.css';

import { useEffect, useState } from 'react';
import lottie from 'lottie-web';
import { lottieAnimations } from '../../../../assets/lottie'; 

export function Hero() {
  const [exchangeImage, setExchangeImage] = useState<string | null>(null);
  const [protectionImage, setProtectionImage] = useState<string | null>(null);
  const [energyImage, setEnergyImage] = useState<string | null>(null);

  const loadLottieFirstFrame = (animationData: any, width: number, height: number): Promise<string> => {
    return new Promise((resolve) => {
      const container = document.createElement('div');
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
      container.style.position = 'absolute';
      container.style.top = '-9999px'; // Hide the container
      document.body.appendChild(container);

      const animation = lottie.loadAnimation({
        container: container,
        renderer: 'canvas',
        loop: false,
        autoplay: false,
        animationData: animationData,
      });

      animation.addEventListener('DOMLoaded', () => {
        animation.goToAndStop(0, true);

        setTimeout(() => {
          const canvas = container.querySelector('canvas');
          if (canvas) {
            const dataUrl = canvas.toDataURL();
            document.body.removeChild(container);
            resolve(dataUrl);
          }
        }, 100);
      });
    });
  };

  useEffect(() => {
    const loadImages = async () => {
      const exchange = await loadLottieFirstFrame(lottieAnimations.exchange, 70, 70);
      setExchangeImage(exchange);
      const protection = await loadLottieFirstFrame(lottieAnimations.protection, 70, 70);
      setProtectionImage(protection);
      const energy = await loadLottieFirstFrame(lottieAnimations.energy, 70, 70);
      setEnergyImage(energy);
    };

    loadImages();
  }, []);

  return (
    <section className={styles.hero}>
      <Container maxWidth='lg'>
        <div className={styles.hero__wrap}>
          <div className={styles.hero__top}>
            <h1 className={styles.hero__title}>
              <span>Residential Proxies P2P </span>
              <br/>
              <span> Share internet and make money online</span>
            </h1>
            <h3 className={styles.hero__desc}>
              We offer the world's leading proxy exchange platform with support for P2P connections. Share Your Internet
              and Make Money Online Easily.
            </h3>
            <Button width={202}>Get Started</Button>
            <div className={styles.hero__logo__wrap}>
              <p>As seen on:</p>
              <div className={styles.hero__logos}>
                <div className={styles.hero__logo}>
                  <img src={svgs.fcmagLogo} alt='' />
                </div>
                <div className={styles.hero__logo}>
                  <img src={svgs.techradar} alt='' />
                </div>
                <div className={styles.hero__logo}>
                  <img src={svgs.techAdvisor} alt='' />
                </div>
                <div className={styles.hero__logo}>
                  <img src={svgs.hackerNoon} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.hero__bottom}>
            <div className={styles.hero__item}>
              <div className={styles.hero__item__img}>
                {exchangeImage && <img src={exchangeImage} alt='Exchange' style={{ width: '70px', height: '70px' }} />}
              </div>
              <div className={styles.hero__item__content}>
                <p className={styles.hero__item__name}>Proxy Transparent</p>
                <p className={styles.hero__item__desc}>
                  Ensures privacy by not recording user activities. Optimize network traffic and improve user
                  experience.
                </p>
              </div>
            </div>
            <div className={styles.hero__item}>
              <div className={styles.hero__item__img}>
                {protectionImage && <img src={protectionImage} alt='Protection' style={{ width: '70px', height: '70px' }} />}
              </div>
              <div className={styles.hero__item__content}>
                <p className={styles.hero__item__name}>No usage logs</p>
                <p className={styles.hero__item__desc}>
                  Maximizes speed for an optimal browsing experience with lower ping times for faster response.
                </p>
              </div>
            </div>
            <div className={styles.hero__item}>
              <div className={styles.hero__item__img}>
                {energyImage && <img src={energyImage} alt='Energy' style={{ width: '70px', height: '70px' }} />}
              </div>
              <div className={styles.hero__item__content}>
                <p className={styles.hero__item__name}>High Speed</p>
                <p className={styles.hero__item__desc}>
                  A Transparent Proxy is an ideal solution for those who want to enhance security and network
                  management.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.hero__deco}>
            <HeroCircle />
          </div>
        </div>
      </Container>
    </section>
  );
}