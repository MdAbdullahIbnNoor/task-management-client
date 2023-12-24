import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUsers } from "react-icons/fa";
import useAuth from '../hooks/useAuth';
import avater from '../assets/avater.png';


const Dashboard = () => {
    const { user } = useAuth();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='flex'>
            <div className="w-24 lg:w-56 min-h-[770px] bg-amber-500">
                {/* side bar */}
                <ul className='menu '>

                    <>
                        <div className='flex justify-center items-center gap-2 border-2 px-1 py-1 rounded-3xl my-2 mx-7'>
                            <span className='text-base font-semibold text-gray-700'>{user?.displayName}</span>
                            <div className="w-10 h-10 overflow-hidden border-2 border-gray-100 rounded-full">
                                <img
                                    src={user?.photoURL || avater}
                                    className="object-cover w-9 h-9"
                                    alt="avatar"
                                />
                            </div>
                        </div>
                        <li className='px-1 py-2 text-base font-medium flex gap-2 items-center'>
                            <NavLink to='/dashboard/userProfile'><FaHome />UserHome</NavLink>
                        </li>
                        <li className='px-1 py-2 text-base font-medium flex gap-2 items-center'>
                            <NavLink to='/dashboard/taskList'><FaCalendar />Task List</NavLink>
                        </li>
                        <li className='px-1 py-2 text-base font-medium flex gap-2 items-center'>
                            <NavLink to='/dashboard/createTask'><FaAd />Add a Task</NavLink>
                        </li>
                    </>

                    <div className='divider px-4'></div>

                    <li className='px-1 py-2 text-base font-medium flex gap-2 items-center'>
                        <NavLink to='/'><FaHome />Home</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 px-16 py-10 bg-amber-50">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard