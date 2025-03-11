import React from 'react'
import { Link } from 'react-router-dom'

function EmptyBlogPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>


        <h2 className="text-xl font-semibold text-gray-600">No Articles Found</h2>
        <p className="text-gray-500 mt-2">You haven't added any articles to your favorites yet.</p>
        <Link to='/articles' class="mt-4 px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Browse Articles
        </Link>
</div>

    )
}

export default EmptyBlogPage