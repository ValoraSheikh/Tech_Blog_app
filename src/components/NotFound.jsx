import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
        {/* Hello world */}
        <section className="bg-white dark:bg-gray-900 h-[90vh] flex justify-center items-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-blue-600 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                404
                </h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                Something's missing.
                </p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we can't find that page. You'll find lots to explore on the
                home page.{" "}
                </p>
                <Link to='/'>
                <button className="mt-4 px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800">
                Back to Homepage

                </button>
                
                </Link>
            </div>
            </div>
        </section>
        </>
    )
}

export default NotFound