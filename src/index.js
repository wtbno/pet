import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MainRoutes from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>
);

