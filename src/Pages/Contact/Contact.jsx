import React from 'react'
import aveter from '../../assets/avater.png'

const Contact = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-20 lg:py-20 lg:mt-10 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
                    <div className="dark:text-gray-400">Leave me a message</div>
                </div>
                <img src={aveter} alt="" className="pl-0 h-36 md:h-72 md:w-72" />
            </div>
            <form novalidate="" className="space-y-6">
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 dark:bg-gray-800 border-2 rounded-xl" />
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 dark:bg-gray-800 border-2 rounded-xl" />
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 dark:bg-gray-800 border-2 rounded-xl"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
            </form>
        </div>
    )
}

export default Contact