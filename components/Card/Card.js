import React from 'react';
import styles from './Card.module.css';

function Card({ image, title, description, onViewDetails }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage} />
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{description}</p>
                <button className={styles.cardBtn} onClick={onViewDetails}>
                    View Details <span className={styles.arrow}>&rarr;</span>
                </button>
            </div>
        </div>
    );
}

export default Card;
