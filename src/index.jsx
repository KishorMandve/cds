import React from 'react';
import ReactDOM from "react-dom";
import './main.css';      // Optional: import global styles
import App from './App';    // Root component of your app
import { ClassPrefix } from '@carbon/react';

// Render the App component inside the root element
ReactDOM.render(
  <React.StrictMode>
    <ClassPrefix prefix="bx">
      <App />
    </ClassPrefix>
  </React.StrictMode>,
  document.getElementById('root')
);
