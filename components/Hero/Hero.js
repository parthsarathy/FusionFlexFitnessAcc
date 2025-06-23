"use client";
import React from 'react';
import Button from '../Button/Button';
import Carousel from '../Carousel/Carousel';

function Hero() {
    return (
        <section
            style={{
                background: '#ff6600',
                color: '#fff',
                padding: '8vw 0',
                position: 'relative',
                zIndex: 1,
                marginTop: undefined, // remove marginTop for desktop
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    gap: '120px',
                    flexWrap: 'wrap',
                }}
            >
                {/* Left: Content */}
                <div
                    style={{
                        flex: 1,
                        minWidth: 260,
                        maxWidth: '100%',
                        marginBottom: 32,
                        minWidth: 'min(350px, 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    <h1
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                            fontWeight: 'bold',
                            marginBottom: 16,
                            lineHeight: 1.1,
                            textAlign: 'left',
                        }}
                    >
                        Premium Fitness Accessories for every workout
                    </h1>
                    <p
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                            marginBottom: 32,
                            textAlign: 'left',
                        }}
                    >
                        Discover premium accessories designed for performance, comfort, and style. Start your transformation today!
                    </p>
                    <div
                        className="hero-btns"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 16,
                            flexDirection: 'row',
                            justifyContent: 'flex-start', // left align for desktop
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <div style={{ minWidth: 140, maxWidth: 200 }}>
                            <Button
                                style={{
                                    border: '2px solid #fff',
                                    background: 'transparent',
                                    color: '#fff',
                                    width: '100%',
                                    fontSize: '1rem',
                                }}
                                onClick={() => window.location.href = '/products'}
                            >
                                View Products
                            </Button>
                        </div>
                        <div style={{ minWidth: 140, maxWidth: 200 }}>
                            <Button
                                style={{
                                    background: '#fff',
                                    color: '#ff6600',
                                    width: '100%',
                                    fontSize: '1rem',
                                }}
                                onClick={() => window.location.href = '/about'}
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Right: Carousel */}
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: 260,
                        maxWidth: '100%',
                        marginTop: 0,
                    }}
                >
                    <div style={{
                        width: 600,
                        height: 400,
                        borderRadius: 24,
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                        background: 'linear-gradient(135deg, #fff 70%, #ffe0cc 100%)',
                        maxWidth: '100%',
                        border: 'none',
                        borderTop: '8px solid #ff6600',
                        borderBottom: '8px solid #ff6600',
                        transition: 'box-shadow 0.3s',
                    }}>
                        <Carousel />
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 900px) {
                    section > div {
                        flex-direction: column !important;
                        gap: 48px !important;
                        align-items: center !important;
                    }
                    section h1, section p {
                        text-align: center !important;
                    }
                    section > div > div {
                        align-items: center !important;
                        justify-content: center !important;
                    }
                }
                @media (max-width: 600px) {
                    section {
                        padding: 32px 0 !important;
                        margin-top: 70px !important;
                    }
                    section > div {
                        gap: 24px !important;
                    }
                    section h1 {
                        font-size: 2rem !important;
                    }
                    section p {
                        font-size: 1rem !important;
                    }
                    .hero-btns {
                        flex-direction: column !important;
                        align-items: stretch !important;
                        gap: 12px !important;
                        align-content: center !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default Hero;
