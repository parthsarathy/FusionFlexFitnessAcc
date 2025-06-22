import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    const validateEmail = (email) => {
        // Simple email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            setError('Please fill all required fields.');
            return;
        }
        if (!validateEmail(form.email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const result = await res.json();
            if (result.success) {
                setSuccess('Your inquiry has been sent!');
                setForm({ name: '', company: '', email: '', message: '' });
            } else {
                setError(result.error || 'Something went wrong.');
            }
        } catch (err) {
            setError('Something went wrong.');
        }
        setLoading(false);
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.contactLeft}>
                <h2 className={styles.title}>Contact Us</h2>
                <p className={styles.desc}>We'd love to hear from you! Please fill out the form and our team will get back to you soon.</p>
                <div >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px' , marginBottom: '40px' }}>
                        <span role="img" aria-label="phone" style={{ fontSize: '1.2em' }}>📞</span>
                        <span style={{ fontSize: '1.2em' }}>+91 7708842273</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px', marginBottom: '40px' }}>
                        <span role="img" aria-label="email" style={{ fontSize: '1.2em' }}>✉️</span>
                        <span style={{ fontSize: '1.2em' }} >info@fusionflexfitness.com</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px' , marginBottom: '40px'}}>
                        <span role="img" aria-label="address" style={{ fontSize: '1.2em' }}>📍</span>
                        <span  style={{ fontSize: '1.2em' }}>
                            Fusion Flex Fitness Accessories<br />
                            411 Mettu velalar Street , Anakaavoor<br />
                            Cheyyar, Tamilnadu 604407<br />
                            India
                        </span>
                    </div>
                </div>
            </div>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label>Full Name*<input name="name" value={form.name} onChange={handleChange} required /></label>
                <label>Company<input name="company" value={form.company} onChange={handleChange} /></label>
                <label>Email Address*<input name="email" type="email" value={form.email} onChange={handleChange} required /></label>
                <label>Message*<textarea name="message" value={form.message} onChange={handleChange} required rows={4} /></label>
                {error && <div className={styles.error}>{error}</div>}
                {success && <div className={styles.success}>{success}</div>}
                <button className={styles.sendBtn} type="submit" disabled={loading}>
                    {loading ? <span className={styles.spinner}></span> : 'Send Inquiry'}
                </button>
            </form>
        </section>
    );
}

export default ContactForm;
