// Import Node modules using require
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('./middleware/morgan')
const selfMadeMid = require('./middleware/selfMadeMiddleware')
// Instantiate imported Module
const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
// What are Middleware?
// They are functions.
// Middleware needs to have next
// The function of this Middleware is the console.log the requests method/url
// If Middleware applies to all routes, then we use app.use
// Middleware only for a specific route, see line 32

// app.use((req, res, next) => {
//   console.log(`${req.method}: ${req.url}`)
//   next()
// })
app.use(selfMadeMid.methodURL)
// app.use((req, res, next) => {
//   // if it is defined
//   if(req.query.api_key) {
//     next()
//   } else {
//     // Found but not authorized
//     res.status(401).send({msg: "Not Authorized"})
//     // Since we are not allowing authorization, we don't call next()
//   }
// })
app.use(selfMadeMid.apiKeyVerifier)
// Set up a route endpoints
app.get('/', (req, res) => {
  res.send({msg: "hello world"})
})

// Middleware for specific Routes go as the second argument in the route
app.get('/accounts',(req, res, next) => {
  // Inline because it is inline with the route
  console.log("accounts route inline middleware")
  // Don't forget next()!
  // new Error() skips all lines after and goes straight to app.use(error)
  // next(new Error("oops"))
  next()
}, (req, res) => {
  res.send({msg: "accounts"})
})

app.use((error, req, res, next) => {
  res.status(500).send(error)
})
app.get('/transactions', (req, res) => {
  res.send(req.body)
})
app.post('/transactions', (req, res) => {
  console.log(req.body)
  res.send({msg: "transactions"})
})

// Instantiate port number
const port = 4000
// Initialize server on app

app.listen(port)