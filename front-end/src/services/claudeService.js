const CLAUDE_API_URL = 'http://localhost:3001/api/claude';

export async function generatePersona(formData) {
  try {
    const response = await fetch(CLAUDE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }), // Send the entire formData object
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