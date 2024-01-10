import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminAuth from './components/AdminAuth/AdminAuth';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<AdminAuth />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);
}

export default App;
