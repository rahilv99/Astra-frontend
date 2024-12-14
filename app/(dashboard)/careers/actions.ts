'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendApplication(name: string, email: string, position: string, message: string) {
  try {
    await resend.emails.send({
      from: 'careers@yourdomain.com',
      to: 'rahil@astra.ai',
      subject: `New Job Application: ${position}`,
      text: `
Name: ${name}
Email: ${email}
Position: ${position}

Cover Letter:
${message}
      `,
    })
  } catch (error) {
    console.error('Failed to send email:', error)
    throw new Error('Failed to send application')
  }
}

