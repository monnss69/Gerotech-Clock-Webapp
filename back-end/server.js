import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
const openai = new OpenAI({
  apiKey: process.env.CLAUDE_API_KEY,
});
app.use(cors());
app.use(express.json());

app.post('/api/claude', async (req, res) => {
  try {
    const { prompt } = req.body;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // You can change this to use Claude's model when available
      messages: [
        {
          role: 'system',
          content: 'You are an AI assistant that generates detailed personas for elderly people. Your responses should be in valid JSON format and consider cultural, historical, and technological aspects of the person\'s life.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    // Parse the response to ensure it's valid JSON
    const responseText = completion.choices[0].message.content;
    const jsonResponse = JSON.parse(responseText);

    res.json(jsonResponse);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate persona' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});