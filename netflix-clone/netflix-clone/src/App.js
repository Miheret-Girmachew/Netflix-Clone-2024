
// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login/Login';
import Home from '../src/pages/Home/Home';
import SignUp from '../src/pages/SignUp/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<ProtectedRoute><Home /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;

