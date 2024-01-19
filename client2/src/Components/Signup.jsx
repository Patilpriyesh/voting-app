import React, { useState } from 'react';
import axios from '../utils/httpreq';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const Navigate = useNavigate();

  const handleSignup = async () => {
    const data = {fullName, email, password}

    try{
      const response = await axios.post('/admins/register', data);
      if(response.status === 200) {
        setMessage("Admin created successfully!");
        Navigate('/login')
        }else{
          setMessage(response.response.data)
        }
    }catch{ 
      setMessage("Failed to register");
    }



    
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-600">Sign Up</h2>
        <p className='my-4 text-sm'>{message}</p>
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-600 text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
