import React from 'react'
import useAuth from '../../hooks/useAuth'
import avater from '../../assets/avater.png';

const UserProfile = () => {
  const { user } = useAuth();
  // console.log(user);
  return (
    <div className='lg:flex-col-reverse justify-center items-center border-2 px-4 py-1 rounded-3xl'>
      <div className="w-16 h-16 overflow-hidden border-2 border-gray-400 rounded-full">
        <img
          src={user?.photoURL || avater}
          className="object-cover w-16 h-16"
          alt="avatar"
        />
      </div>
      <span className='text-lg font-semibold text-gray-700'>{user?.displayName}</span>
    </div>
  )
}

export default UserProfile