import React from 'react'
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";

const Features = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">The</span>
                    </span>{' '}
                    people choosing our website are
                </h2>
            </div>
            <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 text-3xl">
                            <MdOutlineDeveloperMode />
                        </div>
                        <h6 className="mb-3 font-semibold leading-5 text-2xl text-indigo-700">Developers</h6>
                        <p className="mb-3 text-gray-900 text-base">
                            Empowering Coders to Achieve Productivity Zen.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 text-3xl">
                            <FaUserDoctor />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-2xl text-indigo-700">Doctors</h6>
                        <p className="mb-3 text-gray-900 text-base">
                            Organizing Health Professionals for Peak Performance.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50  text-3xl">
                            <FaBookReader />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-2xl text-indigo-700">Student</h6>
                        <p className="mb-3 text-gray-900 text-base">
                            Students Unleashing the Power of Productive Learning.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 text-3xl">
                            <MdOutlineWorkHistory />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-2xl text-indigo-700">Professionals</h6>
                        <p className="mb-3 text-gray-900 text-base">
                            Elevating Professionals in Every Task and Endeavor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features