import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Anthropic from '@anthropic-ai/sdk';

const app = express();
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

app.use(cors());
app.use(express.json());

app.post('/api/claude', async (req, res) => {
  try {
    const { formData } = req.body;
    
    // Create a demographic-focused prompt
    const prompt = `Generate a demographic profile for the following elderly population segment:
    - Age Range: ${formData.ageRange}
    - Age Band: ${formData.ageBand}
    - Country: ${formData.country}
    - Health Status: ${formData.healthStatus}
    ${formData.gender ? `- Gender: ${formData.gender}` : ''}
    ${formData.livingArrangement ? `- Living Arrangement: ${formData.livingArrangement}` : ''}

    Provide general characteristics and experiences typical for this demographic group. Focus on:
    1. Common life experiences and historical events that shaped this generation in this region
    2. Typical technology usage patterns for this age group and location
    3. Common health considerations based on the demographic profile
    4. General lifestyle patterns typical for this age and cultural context

    Do NOT create a specific fictional person or individual story. Instead, provide demographic insights and general characteristics.`;

    const message = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1024,
      system: `You are an AI assistant that generates demographic profiles for elderly populations. Your responses should be in the following JSON format:
      {
        "persona": {
          "summary": "General demographic description of this population segment",
          "yearOfBirth": "Birth year range based on age"
        },
        "historicalEvents": [
          {
            "year": "YYYY",
            "event": "Significant historical event for this demographic",
            "description": "How this event typically affected this population segment"
          }
        ],
        "technology": {
          "familiarity": "Typical tech familiarity level for this demographic",
          "devices": ["Common devices used by this age group in this region"],
          "challenges": ["Common tech challenges for this demographic"]
        },
        "health": {
          "current": "Typical health status description for this demographic",
          "conditions": ["Common health conditions for this age group"],
          "predictions": ["Typical health considerations for this demographic"]
        }
      }

      Important:
      - Do NOT create fictional individual stories
      - Focus on demographic trends and patterns
      - Provide general characteristics of the population segment
      - Base information on demographic data and research
      - Keep descriptions general and representative of the group`,
      messages: [
        {
          role: 'user',
          content: prompt,
        }
      ],
      temperature: 0.7,
    });

    // Parse the response to ensure it's valid JSON
    const responseText = message.content[0].text;
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