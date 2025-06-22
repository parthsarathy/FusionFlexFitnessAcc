"use client";

import HeroHalf from '../../../components/HeroHalf/HeroHalf';
import Article from '../../../components/Article/Article';
import Footer from '../../../components/Footer/Footer';
import Button from '../../../components/Button/Button';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';

const products = [
  {
    image: '/FFFLogo.jpg',
    title: 'Resistance Bands',
    description: 'High-quality resistance bands for strength training and flexibility.',
    details: 'Our resistance bands are made from premium latex, perfect for all fitness levels. Use them for stretching, strength training, and rehabilitation.'
  },
  {
    image: '/FFF Image.jpg',
    title: 'Yoga Mat',
    description: 'Non-slip, cushioned yoga mat for all your stretching and yoga needs.',
    details: 'This yoga mat provides extra cushioning and grip, making it ideal for yoga, pilates, and floor exercises.'
  },
  {
    image: '/file.svg',
    title: 'Water Bottle',
    description: 'Stay hydrated with our BPA-free, leak-proof water bottle.',
    details: 'Our water bottle is BPA-free, leak-proof, and easy to carry. Perfect for gym, travel, and outdoor activities.'
  },
  {
    image: '/globe.svg',
    title: 'Jump Rope',
    description: 'Durable jump rope for cardio and endurance workouts.',
    details: 'Improve your cardio and coordination with our tangle-free, adjustable jump rope.'
  },
  {
    image: '/window.svg',
    title: 'Foam Roller',
    description: 'Relieve muscle soreness with our high-density foam roller.',
    details: 'Perfect for post-workout recovery, this foam roller helps relieve muscle tension and improve flexibility.'
  },
  {
    image: '/vercel.svg',
    title: 'Fitness Gloves',
    description: 'Comfortable gloves for better grip and hand protection.',
    details: 'Protect your hands and improve your grip with our padded, breathable fitness gloves.'
  },
  {
    image: '/FFFLogo.jpg',
    title: 'Gym Bag',
    description: 'Spacious and stylish gym bag to carry all your essentials.',
    details: 'Carry all your gym essentials in style with our spacious, durable gym bag.'
  },
  {
    image: '/FFF Image.jpg',
    title: 'Fitness Tracker',
    description: 'Track your progress with our advanced fitness tracker.',
    details: 'Monitor your workouts, steps, and calories burned with our easy-to-use fitness tracker.'
  },
];

function getProductBySlug(slug) {
  return products.find(
    (p) => p.title.replace(/\s+/g, '-').toLowerCase() === slug
  );
}

export default function ProductDetail({ params }) {
  const { productname } = params;
  const product = getProductBySlug(productname);
  if (!product) return notFound();

  return (
    <div>
      <HeroHalf
        image={product.image}
        title={product.title}
        subtitle={product.description}
      />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 0' }}>
        <Article title={`About ${product.title}`}>
          <p>{product.details}</p>
        </Article>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="/get-quote" style={{ textDecoration: 'none' }}>
            <Button>Get Quote for {product.title}</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
