# VocalFest 2024 - Acappella Festival Platform

A modern web application for managing and voting in acappella festivals. The platform allows users to view participating teams, watch performances, and vote for their favorites across different categories.

## Features

- 🎵 View participating acappella teams and their details
- 🎥 Watch performance videos across different categories
- 🗳️ User authentication and secure voting system
- 📊 One vote per category per user
- 📱 Responsive design for all devices

## Tech Stack

### Frontend
- React 18 with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons
- Context API for state management

### Backend (Requirements)
- Node.js with Express
- MongoDB for database
- JWT for authentication
- REST API architecture

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React Context providers
├── pages/              # Page components
├── types/              # TypeScript interfaces
└── data/              # Mock data (to be replaced with API calls)
```

## Environment Variables

Create a `.env` file with:

```
VITE_API_URL=your_backend_url
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request