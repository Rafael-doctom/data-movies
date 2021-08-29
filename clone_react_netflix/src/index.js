import React from 'react';
import ReactDOM from 'react-dom';
// abaixo ele importa a pasta App para renderizar no index.
import App from './App';
// 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

