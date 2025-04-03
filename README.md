````markdown
# IPL T20 Dashboard

A responsive, real-time dashboard application for tracking IPL (Indian Premier League) T20 cricket matches, standings, and schedules.

## 📋 Overview

This Next.js application provides cricket fans with a comprehensive dashboard to track IPL T20 matches. The dashboard displays live match information, upcoming matches, team standings in the points table, and the complete match schedule in an intuitive, responsive interface.

## ✨ Features

- **Live Match Tracking**: Real-time updates for ongoing matches including score, run rate, and player statistics
- **Upcoming Matches**: Information about scheduled matches with date, time, and venue details
- **Points Table**: Current team standings with wins, losses, points, and net run rate
- **Match Schedule**: Complete fixture list organized by date
- **Responsive Design**: Mobile-first approach ensuring great user experience across all devices
- **Auto-Refresh**: Data refreshes automatically every 5 minutes to ensure up-to-date information

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **API**: Next.js API Routes
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ipl-dashboard.git
   cd ipl-dashboard
   ```
````

2. Install dependencies:

```shellscript
npm install
# or
yarn install
```

3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```shellscript
npm run build
npm run start
# or
yarn build
yarn start
```

## 📁 Project Structure

```plaintext
ipl-dashboard/
├── app/                    # Next.js App Router
│   ├── api/                # API routes
│   │   └── scrape/         # Data scraping endpoint
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # UI components (shadcn/ui)
│   ├── dashboard.tsx       # Main dashboard component
│   ├── live-match.tsx      # Live match display
│   ├── match-schedule.tsx  # Match schedule component
│   ├── points-table.tsx    # Points table component
│   └── theme-provider.tsx  # Theme provider for dark/light mode
├── lib/                    # Utility functions and types
│   ├── api.ts              # API client functions
│   ├── dummy-data.ts       # Fallback data
│   ├── types.ts            # TypeScript type definitions
│   └── utils.ts            # Utility functions
├── hooks/                  # Custom React hooks
├── public/                 # Static assets
└── package.json            # Project dependencies
```

## 📊 Data Flow

1. The application fetches data from the `/api/scrape` endpoint
2. The API route either scrapes the IPL website or returns dummy data
3. Data is refreshed automatically every 5 minutes
4. If data fetching fails, the application displays a toast notification and uses cached data

## 🔄 API Documentation

### GET `/api/scrape`

Fetches IPL data including live match, upcoming matches, points table, and schedule.

**Response:**

```json
{
  "liveMatch": {
    // Live match data if available
  },
  "upcomingMatches": [
    // Array of upcoming matches
  ],
  "pointsTable": [
    // rray of team standings
  ],
  "schedule": [
    // Array of all matches
  ]
}
```

## 📱 Responsive Design

The dashboard is built with a mobile-first approach:

- Fluid layouts that adapt to different screen sizes
- Optimized components for mobile viewing
- Responsive tables that maintain readability on small screens
- Touch-friendly UI elements

## 🔍 Key Components

### Dashboard

The main container component that manages data fetching and displays all sections.

### Live Match

Displays detailed information about the current live match or upcoming match, including:

- Team logos and names
- Current score and run rate
- Match status and progress
- Batting and bowling statistics (for live matches)

### Points Table

Shows the current IPL standings with:

- Team position and movement indicators
- Matches played, won, and lost
- Points and net run rate
- Recent form (last 5 matches)

### Match Schedule

Presents the complete match schedule:

- Grouped by date
- Team information with logos
- Match time and venue
- Match status (upcoming or completed)

## 🔮 Future Improvements

- **Player Statistics**: Add detailed player statistics and performance metrics
- **Match Predictions**: Implement predictive analytics for match outcomes
- **User Authentication**: Allow users to create accounts and set favorite teams
- **Push Notifications**: Send notifications for match starts, wickets, and other key events
- **Historical Data**: Add access to data from previous IPL seasons

## 🙏 Acknowledgements

- [IPL T20](https://www.iplt20.com/) for the inspiration and data
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide React](https://lucide.dev/) for the icon set
