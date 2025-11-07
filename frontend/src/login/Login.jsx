import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    try {
      // TODO: Replace with actual login API call
      // const response = await loginApi(formData);
      // if (response.success) {
      //   onLogin(response.user);
      // }
      
      // For now, simulate successful login
      console.log('Login attempt:', formData.username);
      onLogin && onLogin({ username: formData.username });
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Hotel Management</h1>
          <p>Login to Dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          <div className="login-footer">
            <a href="#forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}