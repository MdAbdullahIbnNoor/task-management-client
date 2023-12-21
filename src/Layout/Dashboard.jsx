import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUsers } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-56 min-h-[770px] bg-amber-500">
                {/* side bar */}
                <ul className='menu '>

                    <>
                        <li className='px-1 py-2 text-base font-medium flex gap-2 items-center'>
                            <NavLink to='/dashboard/userProfile'><FaHome />UserHome</NavLink>
                        </li>
                        <li className='px-1 py-2 text-base font-medium flex gap-2 items-center'>
                        <NavLink to='/dashboard/taskList'><FaCalendar />Task List</NavLink>
                        </li>
                        <li className='px-1 py-2 text-base font-medium flex gap-2 items-center'>
                        <NavLink to='/dashboard/createTask'><FaAd /> Add a Task</NavLink>
                        </li>
                    </>

                    {/* Shered links */}
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