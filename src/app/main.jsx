import React from 'react';
import ReactDOM from 'react-dom/client';
import "../app/styles/index.css";
import Intro from '../pages/intro/Intro.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Intro />
  </React.StrictMode>
)