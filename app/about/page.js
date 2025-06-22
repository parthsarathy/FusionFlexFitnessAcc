import HeroHalf from '../../components/HeroHalf/HeroHalf';
import Article from '../../components/Article/Article';

export default function AboutPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh' }}>
      <HeroHalf
        image="/FFFLogo.jpg"
        title="About Fusion Flex Fitness"
        description="Empowering your fitness journey with premium accessories, comfort, and style."
      />
      <Article subtitle="Who We Are">
        <p>
          Fusion Flex Fitness is dedicated to providing premium fitness accessories that empower your journey to a healthier, stronger, and more confident you. Our mission is to deliver quality, comfort, and style in every product we offer.
        </p>
        <p>
          Founded in 2020, we have helped thousands of fitness enthusiasts achieve their goals with our innovative and reliable accessories. Join us and experience the Fusion Flex difference!
        </p>
      </Article>
    </main>
  );
}
