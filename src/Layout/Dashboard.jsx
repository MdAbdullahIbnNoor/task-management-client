import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUsers } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className='flex py-8 '>
            <div className="w-72 min-h-[950px] bg-amber-500">
                {/* side bar */}
                <ul className='menu '>

                    <>
                        <li className='px-3 py-2 text-lg font-medium'>
                            <NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink>
                        </li>
                        <li className='px-3 py-2 text-lg font-medium'>
                            <NavLink to='/dashboard/taskList'><FaCalendar />Task List</NavLink>
                        </li>
                        <li className='px-3 py-2 text-lg font-medium'>
                            <NavLink to='/dashboard/addTask'><FaAd /> Add a Task</NavLink>
                        </li>
                    </>

                    {/* Shered links */}
                    <div className='divider px-4'></div>

                    <li className='px-3 py-2 text-lg font-medium'>
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