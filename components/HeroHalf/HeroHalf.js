import React from 'react';
import styles from './HeroHalf.module.css';

function HeroHalf({ image, title, description }) {
  return (
    <section className={styles.heroHalf} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroHalf;
