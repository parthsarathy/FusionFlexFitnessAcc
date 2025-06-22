"use client";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Article from '../components/Article/Article';
import Card from '../components/Card/Card';
import ContactForm from '../components/ContactForm/ContactForm';
import headerStyles from '../components/Header/Header.module.css';
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';

const products = [
  {
    image: '/FFFLogo.jpg',
    title: 'Resistance Bands',
    description: 'High-quality resistance bands for strength training and flexibility.',
  },
  {
    image: '/FFF Image.jpg',
    title: 'Yoga Mat',
    description: 'Non-slip, cushioned yoga mat for all your stretching and yoga needs.',
  },
  {
    image: '/file.svg',
    title: 'Water Bottle',
    description: 'Stay hydrated with our BPA-free, leak-proof water bottle.',
  },
  {
    image: '/globe.svg',
    title: 'Jump Rope',
    description: 'Durable jump rope for cardio and endurance workouts.',
  },
  {
    image: '/window.svg',
    title: 'Foam Roller',
    description: 'Relieve muscle soreness with our high-density foam roller.',
  },
  {
    image: '/vercel.svg',
    title: 'Fitness Gloves',
    description: 'Comfortable gloves for better grip and hand protection.',
  },
  {
    image: '/FFFLogo.jpg',
    title: 'Gym Bag',
    description: 'Spacious and stylish gym bag to carry all your essentials.',
  },
  {
    image: '/FFF Image.jpg',
    title: 'Fitness Tracker',
    description: 'Track your progress with our advanced fitness tracker.',
  },

];

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Hero />
      <div className={headerStyles.headerPadding}>
        <section style={{  padding: '40px 0', backgroundColor: 'lightgrey',  }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 40 }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <h2 style={{  fontSize: '2rem', marginBottom: 24, marginLeft: 40 }}>About FutionFlexFitness</h2>
              <div>
                <p style={{
                  padding: '24px 32px',
                  fontSize: '1.1rem',
                  color: '#333',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  Fusion Flex Fitness is dedicated to providing premium fitness accessories that empower your journey to a healthier, stronger, and more confident you. Our mission is to deliver quality, comfort, and style in every product we offer.
                </p>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 240, display: 'flex', justifyContent: 'center' }}>
              <img src="/FFFLogo.jpg" alt="Fusion Flex Fitness Logo" style={{ maxWidth: 300, width: '100%', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
            </div>
          </div>
        </section>
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2 style={{ color: '#ff6600', fontSize: '2rem', marginBottom: 8 }}>Featured Products</h2>
            <p style={{ color: '#444', fontSize: '1.1rem' }}>Explore our best-selling fitness accessories designed for every workout need.</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            justifyItems: 'center',
            width: '100%'
          }}>
            {products.map((product, idx) => (
              <div key={idx} style={{ width: '100%' }} onClick={() => router.push(`/products/${encodeURIComponent(product.title.replace(/\s+/g, '-').toLowerCase())}`)}>
                <Card
                  image={product.image}
                  title={product.title}
                  description={product.description}
                />
              </div>
            ))}
          </div>
        </section>
        <section style={{ padding: '48px 0', background: '#f5f5f5' }}>
          <div style={{ maxWidth: 'auto', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#ff6600', fontSize: '2rem', marginBottom: 16 }}>Why Choose FusionFlex Fitness?</h2>
            <p style={{ color: '#333', fontSize: '1.15rem', marginBottom: 40 }}>
              Discover what sets us apart—FusionFlex Fitness is committed to delivering the best experience for your fitness journey, from product quality to customer care.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 42 }}>
              <div style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 300, borderRadius: 16, padding: 32, margin: '0 8px' }}>
                <img src="/vercel.svg" alt="Premium Quality" style={{ width: 48, height: 48, marginBottom: 16 }} />
                <h3 style={{ color: '#222', fontSize: '1.2rem', marginBottom: 8 }}>Premium Quality</h3>
                <p style={{ color: '#555', fontSize: '1rem' }}>Our products are crafted with the highest standards for durability, comfort, and performance.</p>
              </div>
              <div style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 300, borderRadius: 16, padding: 32, margin: '0 8px' }}>
                <img src="/globe.svg" alt="Fast Delivery" style={{ width: 48, height: 48, marginBottom: 16 }} />
                <h3 style={{ color: '#222', fontSize: '1.2rem', marginBottom: 8 }}>Fast Delivery</h3>
                <p style={{ color: '#555', fontSize: '1rem' }}>Enjoy quick and reliable shipping so you can start your fitness journey without delay.</p>
              </div>
              <div style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 300, borderRadius: 16, padding: 32, margin: '0 8px' }}>
                <img src="/window.svg" alt="Expert Support" style={{ width: 48, height: 48, marginBottom: 16 }} />
                <h3 style={{ color: '#222', fontSize: '1.2rem', marginBottom: 8 }}>Expert Support</h3>
                <p style={{ color: '#555', fontSize: '1rem' }}>Our team is here to help with expert advice and responsive customer service at every step.</p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 0' }}>
          <h2 style={{ color: '#ff6600', fontSize: '2rem', marginBottom: 24 }}></h2>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
