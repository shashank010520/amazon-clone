const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51IfLx9SGpiHGLwCf0tyyQGkzvstxtK62NzoobmSxmjKTYXSYJWET8chvmQP1ST7Rub1y7JICkdU5Vu3CTRTpDgma00RK6PhiIw')

//App config
const app = express();

// middlewares
app.use(cors({ origin: true}));
app.use(express.json());

//API routes
app.get('/',(request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved BOOM!! for this amount  >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//-Listen command
exports.api = functions.https.onRequest(app)


//example endpoint
//http://localhost:5001/amzon-challenge-94272/us-central1/api