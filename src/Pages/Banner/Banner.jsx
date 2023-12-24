import React from 'react'
import banner from '../../assets/banner.gif'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto lg:px-36 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-[450px]">
          <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96" />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold lg::text-6xl">Your Personal 
            <span className="dark:text-violet-400"> Todo </span> <br /> Command Center
          </h1>
          <p className="mt-6 mb-2 text-lg lg:mb-8">We will provide seamless experience to you</p>
          <div className="flex flex-col space-y-2 items-start justify-start lg:space-y-0 lg:justify-start">
            <Link to="dashboard/taskList" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Lets Explore</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner