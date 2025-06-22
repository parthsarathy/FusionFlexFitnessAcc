import React from 'react';
import styles from './Article.module.css';

function Article({ title, subtitle, children }) {
    return (
        <article className={styles.article}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
            <div className={styles.content}>{children}</div>
        </article>
    );
}

export default Article;
