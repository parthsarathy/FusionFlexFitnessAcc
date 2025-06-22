"use client";
import React from 'react';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';

function Header() {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            {/* Left: Logo */}
            <div className={styles.headerLeft}>
                <img src="/FFFLogo.jpg" alt="Logo" className={styles.headerLogo} />
                <span className={styles.headerBrand}>
                    FusionFlexFitness Accessroies
                </span>
            </div>
            {/* Center: Menu */}
            <nav className={styles.headerNav}>
                <ul className={styles.headerMenu}>
                    <li><a href="/" className={pathname === '/' ? styles.active : ''}>Home</a></li>
                    <li><a href="/about" className={pathname === '/about' ? styles.active : ''}>About Us</a></li>
                    <li><a href="/products" className={pathname === '/products' ? styles.active : ''}>Products</a></li>
                    <li><a href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact Us</a></li>
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