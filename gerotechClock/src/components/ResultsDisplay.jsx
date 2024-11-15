// src/components/ResultsDisplay.jsx
export default function ResultsDisplay() {
    // Mock data - replace with actual data later
    const mockData = {
      persona: {
        summary: "Active senior living in Jakarta, Indonesia. Regular social media user who keeps in touch with family through WhatsApp.",
        yearOfBirth: 1962,
      },
      historicalEvents: [
        {
          year: "1970s",
          event: "New Order Era",
          description: "Experienced economic growth and development during childhood"
        },
        {
          year: "1998",
          event: "Asian Financial Crisis",
          description: "Witnessed major economic and political changes"
        },
        {
          year: "2000s",
          event: "Digital Revolution",
          description: "Adapted to mobile phones and internet technology"
        }
      ],
      technology: {
        familiarity: "Moderate",
        devices: ["Smartphone", "Basic Computer", "Digital TV"],
        challenges: ["Complex apps", "Small text", "Fast updates"]
      },
      health: {
        current: "Generally healthy with some age-related conditions",
        conditions: ["Mild arthritis", "Reading glasses needed"],
        predictions: ["May need mobility support in 5-7 years", "Regular health monitoring recommended"]
      }
    };
  
    return (
      <div className="space-y-6">
        {/* Persona Summary */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Generated Profile</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700">{mockData.persona.summary}</p>
            <p className="text-sm text-gray-500 mt-2">Born in {mockData.persona.yearOfBirth}</p>
          </div>
        </div>
  
        {/* Historical Timeline */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Historical Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
            {mockData.historicalEvents.map((event, index) => (
              <div key={index} className="relative pl-10 pb-8 last:pb-0">
                <div className="absolute left-2 top-1.5 w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-white"></div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-indigo-600">{event.year}</span>
                  <h3 className="text-lg font-medium text-gray-900">{event.event}</h3>
                  <p className="text-gray-500 mt-1">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Technology Familiarity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Technology Profile</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Familiarity Level</h3>
              <p className="mt-1 text-lg font-semibold text-indigo-600">
                {mockData.technology.familiarity}
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700">Devices Used</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {mockData.technology.devices.map((device, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                  >
                    {device}
                  </span>
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-sm font-medium text-gray-700">Technology Challenges</h3>
              <ul className="mt-2 space-y-2">
                {mockData.technology.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                    <span className="text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  
        {/* Health Profile */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Health Profile</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Current Status</h3>
              <p className="mt-1 text-gray-600">{mockData.health.current}</p>
            </div>
  
            <div>
              <h3 className="text-sm font-medium text-gray-700">Current Conditions</h3>
              <ul className="mt-2 space-y-2">
                {mockData.health.conditions.map((condition, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                    <span className="text-gray-600">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h3 className="text-sm font-medium text-gray-700">Future Predictions</h3>
              <div className="mt-2 space-y-2">
                {mockData.health.predictions.map((prediction, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-gray-50 rounded-lg"
                  >
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-gray-600">{prediction}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }