import './App.css';
import GlobalLayout from './layout/GlobalLayout';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginForm from './shared/login-form/login-form';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string) => {
    try {
      setLoginError(null);
      const response = await fetch('http://192.168.0.193:8888/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Login failed');
      }

      const { token } = await response.json();
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login error:', error);
      const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
      setLoginError(message);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={
            isAuthenticated ? (
              <Navigate to='/' replace />
            ) : (
              <LoginForm onLogin={handleLogin} error={loginError} />
            )
          }
        />
        <Route
          path='/'
          element={
            isAuthenticated ? (
              <GlobalLayout />
            ) : (
              <Navigate to='/login' replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
