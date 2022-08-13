import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hello from './Hello';

function App({ hello }) {
  return (
    <div className="container">
      <h1>asd</h1>
      <Routes>
        <Route path="/" element={<div>{hello}</div>} />
      </Routes>
    </div>
  );
}

export default App;
