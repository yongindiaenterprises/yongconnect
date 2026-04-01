import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Create a transporter using SMTP with hardcoded values
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'sales@yongconnect.com',
        pass: 'vzllisvvbwqzqetm', // You'll need to replace this with the actual app-specific password
      },
    });

    // Email content
    const mailOptions = {
      from: 'sales@yongconnect.com',
      to: 'sales@yongconnect.com',
      subject: `Support Request: ${subject}`,
      html: `
        <h2>New Support Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending support email:', error);
    return NextResponse.json(
      { error: 'Failed to send support request' },
      { status: 500 },
    );
  }
}
