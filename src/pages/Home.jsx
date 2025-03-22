import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-end justify-center h-screen bg-gray-100">
      <div className=" p-4 rounded-2xl text-center lg:max-w-90 w-screen my-8">
        <div className='text-left mb-8 max-w-60'>
          <h1 className="text-2xl font-semibold text-black">Welcome to PopX</h1>
          <p className='text-gray-600 text-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <button
          className="w-full cursor-pointer text-lg bg-[#6C25FF] text-white font-semibold py-2 rounded-md mb-2 hover:bg-blue-600"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>
        <button
          className="w-full cursor-pointer bg-[#CEBAFB] text-black font-semibold text-lg py-2 rounded-lg hover:bg-gray-600"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Home