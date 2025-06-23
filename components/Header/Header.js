"use client";
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';

function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(undefined);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const isMobile = windowWidth !== undefined && windowWidth <= 600;
    const isDesktop = windowWidth !== undefined && windowWidth > 600;

    return (
        <header className={styles.header}>
            {/* Left: Logo */}
            <div className={styles.headerLeft}>
                <img src="/FFFLogo.png" alt="Logo" className={styles.headerLogo} />
                <span className={styles.headerBrand}>
                    FusionFlexFitness Accessroies
                </span>
            </div>
            {/* Hamburger Icon for mobile */}
            <button
                className={styles.hamburger}
                aria-label="Open menu"
                onClick={() => setMenuOpen((open) => !open)}
            >
                <span className={styles.hamburgerBar}></span>
                <span className={styles.hamburgerBar}></span>
                <span className={styles.hamburgerBar}></span>
            </button>
            {/* Center: Menu */}
            <nav className={styles.headerNav + ' ' + (menuOpen ? styles.menuOpen : '')}>
                <ul className={styles.headerMenu} style={{ display: menuOpen || isDesktop ? 'flex' : 'none' }}>
                    <li><a href="/" className={pathname === '/' ? styles.active : ''}>Home</a></li>
                    <li><a href="/about" className={pathname === '/about' ? styles.active : ''}>About Us</a></li>
                    <li><a href="/products" className={pathname === '/products' ? styles.active : ''}>Products</a></li>
                    <li><a href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact Us</a></li>
                    {isMobile && (
                      <li className={styles.menuQuoteBtn}><a href="/get-quote" className={styles.headerQuoteBtn}>Get Quotes</a></li>
                    )}
                </ul>
            </nav>
            {/* Right: Get Quotes */}
            <div className={styles.headerRight} style={{ display: isDesktop ? 'block' : 'none' }}>
                <a href="/get-quote" className={styles.headerQuoteBtn}>
                    Get Quotes
                </a>
            </div>
        </header>
    );
}

export default Header;