const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_YkEQWnqAPx5E8OJHBYz55Lc100LJuBkGDb");

// API 

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true })); // cors is for security
app.use(express.json()); // Allows sending data and pass it in JSON format

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment req received!! Amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "eur",
    });
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


// - Listen command 
exports.api = functions.https.onRequest(app)






// Example endpoint
// http://localhost:5001/clone-568b3/us-central1/api



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
