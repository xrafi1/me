const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('.'));
app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const aiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }]
      })
    });

    const data = await aiRes.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || 'No reply.';
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.json({ reply: 'Error contacting AI.' });
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
