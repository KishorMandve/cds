import React from 'react';
import ReactDOM from "react-dom";
import './main.css';      // Optional: import global styles
import App from './App';    // Root component of your app

// Render the App component inside the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
