const CLAUDE_API_URL = 'http://localhost:3001/api/claude'; // We'll create this endpoint in the backend

export async function generatePersona(formData) {
  const prompt = `Generate a detailed persona for an elderly person with the following characteristics:
- Age Range: ${formData.ageRange}
- Age Band: ${formData.ageBand}
- Country: ${formData.country}
- Health Status: ${formData.healthStatus}

Please provide the information in the following JSON format:
{
  "persona": {
    "summary": "A brief summary of the person",
    "yearOfBirth": "Calculated based on age range"
  },
  "historicalEvents": [
    {
      "year": "Year or decade",
      "event": "Significant historical event",
      "description": "How it impacted their life"
    }
  ],
  "technology": {
    "familiarity": "Level of tech familiarity",
    "devices": ["List of devices they likely use"],
    "challenges": ["List of tech challenges they face"]
  },
  "health": {
    "current": "Current health status description",
    "conditions": ["List of likely health conditions"],
    "predictions": ["Future health predictions"]
  }
}

Consider their cultural background, historical events they lived through, and typical technology adoption patterns for their age and region.`;

  try {
    const response = await fetch(CLAUDE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate persona');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating persona:', error);
    throw error;
  }
}