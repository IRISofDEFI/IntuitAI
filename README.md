IntuitAI - AI-Powered Crypto Prediction Platform
📖 Overview
IntuitAI is a modern, beautifully designed web application that serves as a landing page and an interactive platform for getting AI-powered cryptocurrency predictions. Users can explore the features of the service on the home page and interact with a specialized AI agent to receive market insights and analysis on various cryptocurrencies.

✨ Key Features
Stunning & Responsive Landing Page: A visually rich home page designed to attract users, complete with modern graphics and smooth animations.
Interactive AI Chat: A dedicated chat page where users can interact with the "Crypto Predictor" AI to receive market analysis.
AI Agent Integration: The frontend is designed to connect to a backend service that powers the AI agent and its web search capabilities.
Modern Tech Stack: Built with React, Tailwind CSS, and shadcn/ui components for a polished and maintainable user interface.
"Powered by Fluent" Branding: Seamlessly integrates "Fluent" branding in both the header and a dedicated section, complete with motion effects.
🚀 Technology Stack
Framework: React
Styling: Tailwind CSS
UI Components: shadcn/ui
Icons: Lucide React
Routing: react-router-dom
Backend: Requires a custom backend service to power the AI chat functionality (not included in this repository).
📂 Project Structure
The project is organized into logical directories, making it easy to navigate and extend.

/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Home.js
│   │   └── CryptoPredictorChat.js
│   │
│   ├── components/
│   │   ├── Footer.js
│   │   └── agent/
│   │       └── MessageBubble.js
│   │
│   ├── App.js
│   └── index.js
│
└── package.json
(Note: The agents/ directory from the original build contains the agent's configuration and would be used by the backend service.)

💻 Running the Project Locally
Follow these steps to get the project running on your local machine.

Prerequisites
Node.js: Make sure you have Node.js (version 16.x or higher) installed. You can download it from nodejs.org.
npm or yarn: A package manager for JavaScript. npm is included with Node.js.
Installation & Setup
Clone the repository: Open your terminal and clone the project to your local machine.

git clone <your-repository-url>
cd <project-directory>
Install dependencies: Install all the required packages for the project.

# Using npm
npm install

# Or using yarn
yarn install
Set up environment variables: The application will need to connect to a backend service to power the AI chat. Create a file named .env in the root of the project and add the endpoint for your backend.

# .env
REACT_APP_AGENT_API_ENDPOINT=http://localhost:8000/api/agent
(Note: This is an example. You will need to build or provide your own backend service to handle the AI agent logic.)

Running the Application
Once the installation is complete, you can start the local development server.

# Using npm
npm start

# Or using yarn
yarn start
This will run the app in development mode. Open http://localhost:3000 to view it in your browser. The page will automatically reload if you make any changes to the code.