import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const handleChange = (e) => {
    setUserData({ ...setUserData, [e.target.name]: e.target.value })
  }
  const submithandler = (e) => {
    e.preventDefault();
    setUserData(setUserData);
    navigate('/hero')
  }


  return (
    <div className='text-black'>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-96 p-6 h-screen bg-white rounded-lg shadow-lg'>
          <h1 className='text-2xl max-w-50 font-semibold'>Signin to your PopX account</h1>
          <p className='max-w-50 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form onSubmit={
            (e) => {
              submithandler(e)
            }
          } className='mt-6'>
            <div className='relative mb-6'>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={setUserData.email}
                onChange={handleChange
                }
                className="shadow border rounded w-full py-2 px-3 text-sm text-black border-gray-400 leading-tight focus:outline-none"
                required
              />
              <label className="absolute left-3 -top-3.5 bg-white px-1 text-[#7960df] font-semibold text-sm" htmlFor="email">
                Email Address
              </label>
            </div>
            <div className='relative mb-6'>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="shadow border rounded w-full py-2 px-3 text-sm text-black border-gray-400 leading-tight focus:outline-none"
                required
              />
              <label className="absolute left-3 -top-3.5 bg-white px-1 text-[#7960df] font-semibold text-sm" htmlFor="password">
                Password
              </label>
            </div>
            <button
              onSubmit={(e) => {
                submithandler(e)
              }
              }
              type="submit"
              className="w-full py-2 px-3 bg-[#7960df] text-white font-semibold rounded hover:bg-[#5743b7] focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage