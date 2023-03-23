const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

const router = express.Router();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI');
}

router.get('/', (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Hello World!' });
});

router.post('/', async (req, res) => {
  // Get the user's input from the request body
  const { prompt } = req.body;

  // Set up the request to the OpenAI API
  try {
    const completion = await openai.createChatCompletion({
      model: process.env.OPEN_AI_MODEL,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 1000,
      stream: false,
      n: 1,
    });
    res
      .status(200)
      .json({ message: completion.data.choices[0].message.content });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        },
      });
    }
  }
});

module.exports = router;
