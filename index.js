const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res) => {
  res.json({
    text: 'api works',
  });
});

app.listen(3000, () => {
  console.log('Server on port 3000');
});
