import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.data.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="py-24 px-10">
      <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <div className="form-control w-full mt-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            className="input input-bordered w-full"
          />
        </div>

        {/* Password Input */}
        <div className="form-control w-full mt-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className="input input-bordered w-full"
          />
        </div>

        {/* Login Button */}
        <button type="submit" className="btn mt-6 w-full btn-primary">
          Login
        </button>

        {/* Register Link */}
        <div className="text-center mt-4">
          Don't have an account?{' '}
          <Link to="/register">
            <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
              Register
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-md shadow-xl">
        <div className="bg-base-100 rounded-xl">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;