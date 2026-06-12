# Products Page - React + TypeScript

A simple products catalog built with React, TypeScript, Tailwind CSS, React Router, Axios, and the DummyJSON API.

## Prerequisites

Before running the project, make sure you have:

* Node.js (v18 or later recommended)
* npm (comes with Node.js)

Verify your installation:

```bash
node -v
npm -v
```

## Clone the Repository

```bash
git clone https://github.com/abdo-bahi/Products-Page-React-TS.git
```

## Install Dependencies

Install all required packages:

```bash
npm install
```

## Start the Development Server

Run:

```bash
npm run dev
```

Vite will start the development server and display a local URL, usually:

```text
http://localhost:5173
```

Open this URL in your browser.

## Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist` folder.

## Preview Production Build

After building:

```bash
npm run preview
```

## Features

* Product listing from DummyJSON API
* Product details page
* Search products by title
* Filter by category
* Filter by minimum and maximum price
* Sorting options
* Pagination
* Responsive design
* Loading states
* React Router navigation

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* Axios
* React Router
* Lucide React Icons
* DummyJSON API

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── layout/
│   ├── MainContent.tsx
│   ├── ProductCard.tsx
│   ├── ProductPage.tsx
│   └── FilterContext.tsx
├── App.tsx
├── main.tsx
└── index.css
```
