/* eslint-disable simple-import-sort/imports */
import ical, { ICalAttendeeType, ICalEventStatus } from 'ical-generator';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phoneCode, phoneNumber, date, time, content } = body;

    // Create a transporter using SMTP with hardcoded values
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'adeeb@yongconnect.com',
        pass: 'vzllisvvbwqzqetm',
      },
    });

    // Format the date and time
    const meetingDate = new Date(date);
    const hour = Number.parseInt(time.slice(0, 2), 10);
    const minute = Number.parseInt(time.slice(3, 5), 10);
    meetingDate.setHours(hour, minute);

    const endTime = new Date(meetingDate.getTime() + 60 * 60 * 1000); // 1 hour duration

    // Create calendar event
    const calendar = ical({ name: 'Meeting Request' });
    calendar.createEvent({
      start: meetingDate,
      end: endTime,
      summary: 'Meeting Request from ' + email,
      description: `Meeting Request Details:\n\nPhone: ${phoneCode} ${phoneNumber}\nAdditional Information: ${content}`,
      organizer: {
        name: 'YongConnect',
        email: 'adeeb@yongconnect.com',
      },
      attendees: [
        {
          email: 'sales@yongconnect.com',
          rsvp: true,
          type: ICalAttendeeType.INDIVIDUAL,
        },
        {
          email: email,
          rsvp: true,
          type: ICalAttendeeType.INDIVIDUAL,
        },
      ],
      status: ICalEventStatus.CONFIRMED,
    });

    // Email content for sales team
    const salesMailOptions = {
      from: 'adeeb@yongconnect.com',
      to: 'sales@yongconnect.com',
      subject: 'New Meeting Request',
      html: `
        <h2>New Meeting Request</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneCode} ${phoneNumber}</p>
        <p><strong>Date:</strong> ${meetingDate.toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${meetingDate.toLocaleTimeString()}</p>
        <p><strong>Additional Information:</strong></p>
        <p>${content}</p>
        <p>Please find the calendar invite attached to this email.</p>
      `,
      attachments: [
        {
          filename: 'meeting.ics',
          content: calendar.toString(),
        },
      ],
    };

    // Email content for requester
    const requesterMailOptions = {
      from: 'adeeb@yongconnect.com',
      to: email,
      subject: 'Your Meeting Request Confirmation',
      html: `
        <h2>Meeting Request Confirmation</h2>
        <p>Thank you for scheduling a meeting with us.</p>
        <p><strong>Meeting Details:</strong></p>
        <p><strong>Date:</strong> ${meetingDate.toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${meetingDate.toLocaleTimeString()}</p>
        <p>Please find the calendar invite attached to this email.</p>
        <p>We look forward to meeting with you!</p>
      `,
      attachments: [
        {
          filename: 'meeting.ics',
          content: calendar.toString(),
        },
      ],
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(salesMailOptions),
      transporter.sendMail(requesterMailOptions),
    ]);

    return NextResponse.json(
      {
        message: 'Meeting request sent successfully',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending meeting request:', error);
    return NextResponse.json(
      { error: 'Failed to send meeting request' },
      { status: 500 },
    );
  }
}
