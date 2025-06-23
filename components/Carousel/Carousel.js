"use client";
import React, { useEffect, useState } from 'react';

const images = [
    '/FFF Image.jpg',
    '/FFFLogo.jpg',
];

function Carousel() {
    const [current, setCurrent] = useState(0);
    const total = images.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total);
        }, 5000);
        return () => clearInterval(timer);
    }, [total]);

    return (
        <div style={{ width: 600, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <img
                src={images[current]}
                alt="carousel"
                style={{ width: '100%', height: '100%', objectFit: 'fill', borderRadius: 12 }}
            />
        </div>
    );
}

export default Carousel;
