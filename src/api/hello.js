const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Hello World!' });
});

router.post('/', (req, res) => {
  const { message } = req.body;
  let response = '';
  switch (message.toLowerCase().trim()) {
    case 'hi' || 'hello':
      response = 'Hi There!';
      break;
    case 'how are you?':
      response = 'I am fine, Thank you for asking, how are you?';
      break;
    default:
      response = 'Hello, world!';
  }
  res.status(201).json({ message: response });
});

module.exports = router;
