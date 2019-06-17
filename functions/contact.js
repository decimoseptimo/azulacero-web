// Gatsby uses weird config stuff
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

// Connect to our Mailgun API wrapper and instantiate it
const mailgun = require('mailgun-js')
const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
})

// Response stuff
// const successCode = 200
// const errorCode = 400
// const headers = {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Headers': 'Content-Type',
// }

// Our cloud function
// exports.handler = async function(event, context, callback) {
exports.handler = async function(event, context) {
    let data = JSON.parse(event.body)
    let { name, email, subject, message } = data
    let mailOptions = {
        from: `${name} <${email}>`,
        to: process.env.MAILGUN_EMAIL_ADDRESS,
        replyTo: email,
        subject: `(Mensaje enviado desde azulacero.mx)`,
        text: `${message}`,
    }

    const response = await mg.messages().send(mailOptions)
    console.log(response)
    return response
}
