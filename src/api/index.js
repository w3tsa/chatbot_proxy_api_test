const express = require('express');

const emojis = require('./emojis');
const hello = require('./hello');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/hello', hello);

module.exports = router;
