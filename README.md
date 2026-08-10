# Mini-SIMS Portal

A compact Student Information Management System dashboard built with React, TypeScript, and Tailwind CSS. Built as a final curriculum project, with a deliberate focus on understanding every part of the stack rather than shipping copy-pasted code.

## Features

- **Dashboard** — overview stat cards (fees due, attendance rate, next class, notifications)
- **Attendance** — mark students present/absent, live "X of Y present" counter, backed by a persistent mock API
- **Fees** — track paid/unpaid status per student, add new fees via form, generate downloadable PDF receipts, paid vs. unpaid bar chart
- **Routing** — real multi-page navigation (Dashboard / Attendance / Fees) via React Router
- **Responsive layout** — collapses to a mobile-friendly layout on small screens
- **Dark theme UI** — built with shadcn/ui components on a custom dark theme

## Tech Stack

- React + TypeScript (Vite)
- Tailwind CSS v4
- shadcn/ui (Base UI) for component primitives
- React Router for navigation
- Recharts for the fees chart
- jsPDF for receipt generation
- json-server as a mock REST API / local database

## Getting Started

Install dependencies:
```bash
npm install
```

Run the app (two terminals required):
```bash
npm run dev      # starts the React app (Vite)
npm run server   # starts the mock API (json-server, port 3001)
```

Both must be running at the same time — the app fetches all student and fee data from the mock API.

Visit `http://localhost:5173`.

## Project Structure

```
src/
  components/       shared UI components (AttendanceItem, FeeItem, DashboardCard)
  components/ui/    shadcn/ui primitives (Card, Button, Badge, Input)
  pages/            route-level pages (Dashboard, Attendance, Fees)
  lib/              utility functions, including PDF receipt generation
  App.tsx           top-level state, data fetching, and routing
db.json             mock database used by json-server
```



## Scope Notes

This project intentionally simplifies a few areas from the original brief for the sake of build time and depth of understanding:
- State is managed with React's built-in `useState`/`useEffect` rather than Redux
- API calls use the native `fetch` API rather than Axios
- The Timetable module and AI-based risk scoring were cut as stretch goals
- Role-based routing (student/admin) was not implemented

## Author's Note

This project was built with an emphasis on understanding — every core React concept (state, props, lifting state, lists, effects, CRUD operations) was learned and applied deliberately rather than copied, in contrast to earlier curriculum projects.

## Submission

- **Live Project:** [https://mini-sims-portal-53vp.vercel.app/](https://mini-sims-portal-53vp.vercel.app/)
- **GitHub Repository:** [https://github.com/reniways25/mini-sims-portal](https://github.com/reniways25/mini-sims-portal)
- **Presentation Slides (PDF):** [View Slides](https://mini-sims-portal-53vp.vercel.app/presentation-slides.pdf)
- **Screenshots:** `./Screenshots`
- **Color Palette:** [Coolors Scheme](https://coolors.co/08090c-d6dad9-0c0b0e-09090b-595d60)
