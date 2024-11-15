// src/components/ProfileForm.jsx
import { useState } from 'react'

const AGE_RANGES = [
  { value: '60-70', label: '60-70 years' },
  { value: '70-80', label: '70-80 years' },
  { value: '80-90', label: '80-90 years' },
  { value: '90+', label: '90+ years' },
]

const AGE_BANDS = [
  { value: '60s', label: '60s' },
  { value: '70s', label: '70s' },
  { value: '80s', label: '80s' },
  { value: '90s', label: '90s' },
]

const HEALTH_STATUS = [
  { id: 'none', label: 'No assistance needed' },
  { id: 'iadls', label: 'Needs help with IADLs' },
  { id: 'adls', label: 'Needs help with ADLs' },
]

export default function ProfileForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    ageRange: '',
    ageBand: '',
    country: '',
    healthStatus: [],
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
      {/* Age Range */}
      <div>
        <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700">
          Age Range
        </label>
        <select
          id="ageRange"
          value={formData.ageRange}
          onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select age range</option>
          {AGE_RANGES.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Age Band */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Age Band
        </label>
        <div className="grid grid-cols-2 gap-4">
          {AGE_BANDS.map((band) => (
            <label
              key={band.value}
              className={`
                flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer
                ${formData.ageBand === band.value
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-600'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <input
                type="radio"
                name="ageBand"
                value={band.value}
                checked={formData.ageBand === band.value}
                onChange={(e) => setFormData({ ...formData, ageBand: e.target.value })}
                className="sr-only"
              />
              <span>{band.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <input
          type="text"
          id="country"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Enter country name"
        />
      </div>

      {/* Health Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Health Status
        </label>
        <div className="space-y-2">
          {HEALTH_STATUS.map((status) => (
            <label key={status.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                value={status.id}
                checked={formData.healthStatus.includes(status.id)}
                onChange={(e) => {
                  const value = e.target.value
                  setFormData({
                    ...formData,
                    healthStatus: e.target.checked
                      ? [...formData.healthStatus, value]
                      : formData.healthStatus.filter((s) => s !== value),
                  })
                }}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{status.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Generate Profile
      </button>
    </form>
  )
}