import Card from '../../components/Card/Card';
import Link from 'next/link';

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
    title: 'Gym Bag',
    description: 'Spacious and stylish gym bag to carry all your essentials.',
  },
  {
    image: '/vercel.svg',
    title: 'Fitness Tracker',
    description: 'Track your progress with our advanced fitness tracker.',
  },
];

export default function ProductsPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', padding: '150px 0' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          maxWidth: 1100,
          gap: '48px', // increased gap
          justifyItems: 'center',
          width: '100%',
        }}
      >
        {products.map((product, idx) => (
          <Link
            key={idx}
            href={`/products/${encodeURIComponent(product.title.replace(/\s+/g, '-').toLowerCase())}`}
            style={{ textDecoration: 'none', color: 'inherit', width: '100%', maxWidth: 340 }}
          >
            <Card
              image={product.image}
              title={product.title}
              description={product.description}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
