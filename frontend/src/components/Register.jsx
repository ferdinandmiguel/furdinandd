// filepath: c:\Users\Miguel Perico\websys_project\frontend\src\components\Register.jsx
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', { username, email, password });
      history.push('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="py-24 px-10">
      <h2 className="text-2xl font-semibold mb-2 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <div className="form-control w-full mt-4">
          <label className="label">
            <span className="label-text text-base-content">Username</span>
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder=""
            className="input input-bordered w-full"
          />
        </div>

        {/* Email Input */}
        <div className="form-control w-full mt-4">
          <label className="label">
            <span className="label-text text-base-content">Email</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            className="input input-bordered w-full"
          />
        </div>

        {/* Password Input */}
        <div className="form-control w-full mt-4">
          <label className="label">
            <span className="label-text text-base-content">Password</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
            className="input input-bordered w-full"
          />
        </div>

        {/* Register Button */}
        <button type="submit" className="btn mt-5 w-full btn-primary">
          Register
        </button>

        <div className="text-center mt-2">
          Already have an account?{' '}
          <Link to="/login">
            <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
              Login
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

const Register = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-md shadow-xl">
        <div className="bg-base-100 rounded-xl">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;