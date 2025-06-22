import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            {/* Left: Logo */}
            <div className={styles.headerLeft}>
                <img src="/FFFLogo.jpg" alt="Logo" className={styles.headerLogo} />
                <span className={styles.headerBrand}>
                    Brand Name
                </span>
            </div>
            {/* Center: Menu */}
            <nav className={styles.headerNav}>
                <ul className={styles.headerMenu}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
            </nav>
            {/* Right: Get Quotes */}
            <div className={styles.headerRight}>
                <a href="/get-quote" className={styles.headerQuoteBtn}>
                    Get Quotes
                </a>
            </div>
        </header>
    );
}

export default Header;