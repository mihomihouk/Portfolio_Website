export default async (req, res) => {
  require('dotenv').config()
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.APP_MAIL_ADDRESS,
      pass: process.env.APP_PASS
    },
    secure: true
  })
  await new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: process.env.APP_MAIL_ADDRESS,
        to: process.env.MAIL_TO,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + ' | Sent from: ' + req.body.email,
        html: `
      <p>Name:${req.body.name}</p>
      <p>Message:${req.body.message}</p>
      <p>Email:${req.body.email}</p>
      `
      },
      (err, info) => {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          console.log(info)
          resolve(info)
        }
      }
    )
  })
  res.send('success')
}
