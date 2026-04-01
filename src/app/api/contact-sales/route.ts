import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phoneCode, phoneNumber, planTitle } =
      await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'adeeb@yongconnect.com',
        pass: 'vzllisvvbwqzqetm',
      },
    });

    // Format the email content
    const emailContent = `
      <h2>New Contact Sales Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneCode} ${phoneNumber}</p>
      ${planTitle ? `<p><strong>Plan:</strong> ${planTitle}</p>` : ''}
    `;

    // Send email to sales team
    await transporter.sendMail({
      from: 'adeeb@yongconnect.com',
      to: 'sales@yongconnect.com',
      subject: 'New Contact Sales Request',
      html: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending contact sales email:', error);
    return NextResponse.json(
      { error: 'Failed to send contact sales request' },
      { status: 500 },
    );
  }
}
