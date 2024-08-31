import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', formData);
      // console.log(response);
      // alert(JSON.stringify(response))
      const token=response.data.token;
      // alert(token)
      const isadmin=response.data.isAdmin;
      // alert(JSON.stringify(isadmin))
      localStorage.setItem("token",token);
      localStorage.setItem("isAdmin",isadmin);

      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    } finally {
      setFormData({
        email: '',
        password: ''
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
              autoComplete='email'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
              autoComplete='current-password'
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
