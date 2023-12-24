import React from 'react'
import useAuth from '../../hooks/useAuth'
import avater from '../../assets/avater.png';

const UserProfile = () => {
  const { user } = useAuth();
  // console.log(user);
  return (
    <div className='flex justify-center items-center gap-2 border-2 px-4 py-1 rounded-3xl'>
      <span className='text-lg font-semibold text-gray-700'>{user?.displayName}</span>
      <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
        <img
          src={user?.photoURL || avater}
          className="object-cover w-9 h-9"
          alt="avatar"
        />
      </div>
    </div>
  )
}

export default UserProfile