// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container (#root) not found. Did you forget to add it to index.html?');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
