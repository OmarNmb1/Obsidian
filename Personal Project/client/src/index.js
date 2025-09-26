import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
); 