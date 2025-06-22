import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.main}>
      </main>
    </>
  );
}
