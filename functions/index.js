const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hia8iIsnI85FPTqX5PC6yOqAFHwu3EDskhzPW2aZStD3S8TTQDMx0LvzxsJDdA8PSR26qtNghdiF6Wo0w5KtvZj00dYZj4mKd')
// got from https://dashboard.stripe.com/test/dashboard


// (These are the thing we need to setup an API)
// API
// emulate to local for testing

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json()); // to return json

// - API routes   (backend usually runs in 5000 in local)
app.get('/', (request, response) => response.status(200).send('hello world')) // 200 is usually good
// app.get('/biglol', (request, response) => response.status(200).send('Whats up biglol'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd"
    })
    // 201 is OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);

// firebase emulators:start   spin-ups a server
// And the Example endpoint from mine
// http://localhost:5001/clone-e8235/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
