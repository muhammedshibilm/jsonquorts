const express = require('express');
const app = express();
const quotes = require('./quotes.json');

app.get('/quote', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(quote);
});

app.listen(process.env.PORT || 3000);
