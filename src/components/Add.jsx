import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    {
      fullname: '',
      email: '',
      phone: '',
    }
  )

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/users', user)
      .then((response) => {
        console.log('New user added:', response.data);
        // Clear the form fields after successful submission
        setUser({
          fullname: '', email: '', phone: '',
        });
        navigate("/");
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  }

  return (
    <div className="flex justify-center mt-7">
      <div className="bg-white overflow-hidden shadow rounded-lg border">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Add User
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            A form to Add a User
          </p>
        </div>
        <form onSubmit={handleSubmit} >
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    id="fullname"
                    name="fullname"
                    value={user.fullname}
                    onChange={handleChange}
                    required
                    className='border border-gray-200 w-full' type='text' />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    className='border border-gray-200 w-full' type='text' />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    id="phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    required
                    className='border border-gray-200 w-full' type='text' />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 flex">
                  <button className="ml-auto px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                  >Add</button>
                </dt>
              </div>
            </dl>
          </div>
        </form>
      </div>
    </div>
  )
}
