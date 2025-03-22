import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext';

const SignupPage = () => {

  const navigate = useNavigate()

  const { setUserData } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: "", password: "", phoneNumber: "", fullName: "", companyName: "" })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const submithandler = (e) => {
    e.preventDefault();
    setUserData(formData);
    setFormData({ email: "", password: "", phoneNumber: "", fullName: "", companyName: "" })
    navigate('/hero')
    console.log(formData);
  }

  useEffect(() => {
    setUserData(null);
  }, [setUserData]);


  return (
    <div className="flex md:items-center md:justify-center h-screen text-black">
      <div className="px-8 h-screen bg-white rounded-lg shadow-lg w-97 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold max-w-40 mt-4 mb-6">Create your PopX account</h2>
          <form onSubmit={(e) => {
            submithandler(e);
          }} className="relative mb-56 sm:mb-48">
            <div className="relative mb-6">
              <input className="shadow border rounded w-full py-2 px-3 text-sm text-black border-gray-400  leading-tight focus:outline-none"
                type="text"
                name="fullName"
                placeholder="Marry Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <label className="absolute left-3 -top-3.5 bg-[#F7F8F9] px-1 text-[#7960df] font-semibold text-sm" htmlFor="fullName">
                Full Name <span className='text-red-400'>*</span>
              </label>
            </div>

            <div className='relative mb-6'>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-sm text-black border-gray-400 leading-tight focus:outline-none"
                required
              />
              <label className="absolute left-3 -top-3.5 bg-[#F7F8F9] px-1 text-[#7960df] text-sm font-semibold" htmlFor="phoneNumber">
                Phone Number <span className='text-red-400'>*</span>
              </label>
            </div>

            <div className='relative mb-6'>
              <input className="shadow border rounded w-full py-2 px-3 text-sm text-black border-gray-400 leading-tight focus:outline-none"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="absolute left-3 -top-3.5 bg-[#F7F8F9] px-1 text-[#7960df] font-semibold text-sm" htmlFor="email">
                Email <span className='text-red-400'>*</span>
              </label>
            </div>

            <div className='relative mb-6'>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-sm text-black border-gray-400  leading-tight focus:outline-none"
                required
              />
              <label className="absolute left-3 -top-3.5 bg-[#F7F8F9] px-1 text-[#7960df] font-semibold text-sm" htmlFor="password">
                Password <span className='text-red-400'>*</span>
              </label>
            </div>

            <div className='relative mb-4'>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-sm text-black border-gray-400 leading-tight focus:outline-none"
              />
              <label className="absolute left-3 -top-3.5 bg-[#F7F8F9] px-1 text-[#7960df] font-semibold text-sm" htmlFor="companyName">
                Company Name
              </label>
            </div>
            <label className="text-black text-md leading-6" htmlFor="yesNo">
              Are you an Agency?<span className='text-red-700'>*</span>
              <div className='flex items-center'>
                <input
                  type="radio"
                  name="yesNo"
                  value="yes"
                  className="form-radio h-4 w-4 text-blue-600"
                  defaultChecked
                /> <span className="m-2">Yes</span>
                <input
                  type="radio"
                  name="yesNo"
                  value="no"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2">No</span>
              </div>
            </label>
            <div className='w-full'>
              <button
                // onSubmit={submithandler}
                type="submit"
                className="w-full translate-y-48 lg:translate-y-34  bg-purple-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupPage