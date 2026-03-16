import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
import '@/index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Failed to find the root element. The app cannot be mounted.");
} else {
  ReactDOM.createRoot(rootElement).render(
    <App />
  );
}