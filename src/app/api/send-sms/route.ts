import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const data = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const smsBody = `
New VARA Inquiry:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location}
Source: ${data.source}
Message: ${data.message}
  `

  try {
    await transporter.sendMail({
      from: `"Vara Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'New VARA Contact Submission',
      text: smsBody,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ success: false, error: 'Failed to send SMS' }, { status: 500 })
  }
}
