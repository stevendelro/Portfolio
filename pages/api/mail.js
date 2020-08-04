const sgMail = require('@sendgrid/mail')

/**
 * THIS MUST BE DOMAIN AUTHENTICATED ONCE PUSHED TO PRODUCTION
 * -It won't work otherwise. More Info: https://app.sendgrid.com/settings/sender_auth
 */

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    if (req.method === 'POST') {
      const { firstName, lastName, email, message } = req.body
      const msg = {
        to: 'stevendelro@gmail.com',
        from: 'stevendelro@pm.me',
        subject: `PORTFOLIO: ${firstName} ${lastName} sent you a message!`,
        text: `Email: ${email} Message: ${message}`,
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Message sent')
        })
        .catch(error => {
          console.error('ERROR SENDING EMAIL VIA SENDGRID')
          console.log(error.response.body)
        })
      return res.status(200).end()
    }
  } catch (error) {
    console.error('ERROR SENDING EMAIL VIA SENDGRID: ', error)
    return res.status(404).json({
      error: {
        code: error.code,
        messgae: error,
      },
    })
  }
}
