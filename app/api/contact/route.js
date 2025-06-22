import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    // Set up transporter using Gmail (use app password for security)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'parthasarathee56@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
      text: `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nMessage: ${data.message}`,
      html: `<p><b>Name:</b> ${data.name}</p>
             <p><b>Company:</b> ${data.company}</p>
             <p><b>Email:</b> ${data.email}</p>
             <p><b>Message:</b><br/>${data.message}</p>`
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email send error:', err);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500 });
  }
}
