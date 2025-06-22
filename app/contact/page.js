"use client";
import ContactForm from '../../components/ContactForm/ContactForm';

export default function ContactPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh', padding: '40px 0' }}>
      <ContactForm />
    </main>
  );
}
