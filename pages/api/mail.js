// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
import mail from '@sendgrid/mail';
mail.setApiKey(process.env.SENDGRID_API_KEY)
export default (req, res) => {
  const body = JSON.parse(req.body);
  
  const message =  `
    Name: ${body.Name}\r\n
    Email: ${body.Email}\r\n
    Subject: ${body.Subject}\r\n
    Meassage: ${body.Message}\r\n
  `;
  const data = {
    to: 'yonatantesfaye30@gamil.com',
    from:'yonitesfu30@gmail.com',
    subject: 'form portfolio',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }
  mail.send(data);

  res.status(200).json({ status: 'ok' })
}
