import React from 'react';
// import { render } from 'react-dom';
import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// render(
//   // <BrowserRouter>
//     <App />,
//   // </BrowserRouter>,
//   document.getElementById('root')
// );

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
