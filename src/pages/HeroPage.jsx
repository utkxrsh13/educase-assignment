import React, { useContext } from 'react'
import 'remixicon/fonts/remixicon.css'
import { UserContext } from '../context/userContext';

const HeroPage = () => {
  const { userData } = useContext(UserContext);
  return (
    <div className='text-black flex items-center justify-center h-screen bg-white'>
      <div className='relative h-screen bg-white rounded-lg shadow-lg w-96 justify-between '>
        <div className='absolute top-4 pl-8'>
          <h2 className='text-2xl'>Account Settings</h2>
        </div>
        <div className='absolute mt-16 pt-6 pl-8 bg-[#F7F8F9] h-[90%]'>
          <div className='flex items-center gap-4 relative'>
            <div className='relative'>
              <img src="https://plus.unsplash.com/premium_photo-1675034393509-788f2947d709?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-20 w-20 rounded-full object-cover"
              alt="" />
              <button className='absolute -translate-y-6 translate-x-14 text-sm bg-purple-800 text-white px-1 py-0 rounded-full'>
                <i className="ri-camera-fill"></i>
              </button>
            </div>
            <div className='transform -translate-y-4'>
              <h2 className='font-semibold'>Marry Doe</h2>
              <p>{userData.email}</p>
            </div>
          </div>
          <div className=''>
            <p className='font-sans text-sm pr-6 leading-6 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum nostrum beatae nulla odio distinctio eligendi laudantium </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage