Personal Finance Tracker

A web-based application for tracking personal finances, built with React, TypeScript, Tailwind CSS, and React Router. The app allows users to record income and expenses, categorize transactions, filter and sort data, visualize income vs. expenses with charts, and export transactions to CSV. Data is persisted using browser local storage, and the UI is fully responsive for optimal use across devices.

Features

Dashboard: View total income, expenses, balance, and a bar chart comparing income vs. expenses.

Transaction Management:

Add transactions with amount, date, category, and optional notes.

Filter transactions by type (income/expense) and category.

Sort transactions by date or amount (ascending/descending).

Export filtered transactions to CSV.

Category Management: Create custom income and expense categories.

Data Persistence: Transactions and categories are saved in browser local storage.

Responsive Design: Mobile-friendly UI with Tailwind CSS.

Chart Visualization: Bar chart powered by Chart.js to visualize income vs. expenses.

Navigation: Multi-page app with React Router for seamless page transitions.

Tech Stack

Frontend: React, TypeScript

Styling: Tailwind CSS

Routing: React Router DOM

Charts: Chart.js, react-chartjs-2

Data Storage: Browser local storage

Build Tool: Vite

Prerequisites

Node.js (v20 or higher)

npm or yarn

A modern web browser

Setup Instructions

Clone the Repository (or create a new project):

git clone https://github.com/Galapagous/Tracker.git
cd tracker

Alternatively, create a new Vite project:

npx create-vite personal-finance-tracker --template react-ts
cd personal-finance-tracker

Install Dependencies:

npm install
npm install react-router-dom chart.js react-chartjs-2 @types/react-router-dom

Configure Tailwind CSS: Create a tailwind.config.js file in the project root:

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ['./src/**/\*.{js,jsx,ts,tsx}'],
theme: {
extend: {},
},
plugins: [],
};

Ensure Tailwind is included in src/index.css or via CDN in index.html.

Add Project Files:

Replace the src/ directory with the provided source files (App.tsx, pages, components, types.ts, index.tsx, index.css).

Ensure index.html is in the project root.

Run the Application:

npm run dev

Open http://localhost:5173 (or the port shown in the terminal) in your browser.

Pr
