//app.js

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware'); // Import the logging middleware

const app = express();
const port = 3000;

// Use the logger middleware for all routes
app.use(loggerMiddleware);

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});