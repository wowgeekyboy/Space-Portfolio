import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message, captchaValue } = req.body

    // Verify captcha
    const captchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaValue}`, {
      method: 'POST',
    })
    const captchaData = await captchaResponse.json()

    if (!captchaData.success) {
      return res.status(400).json({ error: 'Invalid captcha' })
    }

    // Create a transporter
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'sarveshatalkar@gmail.com',
        subject: `New message from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      })

      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}