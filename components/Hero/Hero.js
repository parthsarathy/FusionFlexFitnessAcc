"use client";
import React from 'react';
import Button from '../Button/Button';
import Carousel from '../Carousel/Carousel';

function Hero() {
    return (
        <section style={{ background: '#ff6600', color: '#fff', padding: '8vw 0' }}>
            <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                justifyContent: 'space-between', 
                maxWidth: '1400px', 
                margin: '0 auto', 
                gap: '120px',
                flexWrap: 'wrap',
            }}>
                {/* Left: Content */}
                <div style={{ flex: 1, minWidth: 260, maxWidth: '100%', marginBottom: 32 }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 'bold', marginBottom: 16 }}>Premium Fitness Accessories for every workout</h1>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: 32 }}>
                        Discover premium accessories designed for performance, comfort, and style. Start your transformation today!
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                        <Button style={{ border: '2px solid #fff', background: 'transparent', color: '#fff' }}>View Products</Button>
                        <Button style={{ background: '#fff', color: '#ff6600' }}>Learn More</Button>
                    </div>
                </div>
                {/* Right: Carousel */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 260, maxWidth: '100%' }}>
                    <Carousel />
                </div>
            </div>
        </section>
    );
}

export default Hero;
