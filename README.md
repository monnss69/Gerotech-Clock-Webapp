# Gerotech Clock Webapp

## Overview

The Gerotech Clock Webapp is an innovative platform designed to create personalized elder care cards. These cards aim to capture essential personal and health-related information for elderly users, including their:

- Age and year of birth
- Country and gender
- Health status and other vital details

Additionally, the application leverages AI integration (via APIs like Claude or ChatGPT) to enhance personalization and data insights. This tool aims to provide an intuitive and responsive user experience for caregivers and elderly individuals.

## Features

### Backend
- **Express.js Server**: Handles API requests and logic for generating personalized elder care cards
- **AI Integration**: Uses external AI APIs (Claude/ChatGPT) for intelligent data processing and recommendations

### Frontend
- **Responsive Design**: Developed with modern UI/UX principles to work seamlessly on various devices
- **Dynamic Inputs**: Collects user details interactively and displays the elder care card in real-time

### Additional Features
- **Environment Configuration**: Sensitive information like API keys is secured via .env files
- **Developer-Friendly**: Designed for easy local deployment and customization

## Prerequisites

- Node.js (v14 or later) installed on your system
- npm (Node Package Manager)
- An API key for accessing external AI services (e.g., Claude or ChatGPT)

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/monnss69/Gerotech-Clock-Webapp.git
cd Gerotech-Clock-Webapp
```
2. Backend Configuration
Navigate to the backend folder:
```bash
cd backend
```
Install dependencies:
```bash
npm install
```
Replace .env file in the backend folder with the following content:
```
CLAUDE_API_KEY=your_api_key_here
```
Start the backend server:
```
npm run dev
```
3. Frontend Configuration
Open another CLI to navigate to the frontend folder:
```
cd /frontend
```
Install dependencies:
```
npm install
```
Start the frontend server:
```
npm run dev
```
Open the application in your browser:
```
http://localhost:5173
```
## Usage:

- Access the web app through the provided local URL.
- Enter the required details (age, year of birth, health status, etc.).
- Generate a personalized elder care card.
- Optional: Use the AI integration for additional insights or card recommendations.
