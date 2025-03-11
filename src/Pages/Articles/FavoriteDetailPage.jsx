import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { saveToLocalStorage } from './ArticleDetailPage';


function FavoriteDetailPage() {
    const [isModalOpen , setIsModalOpen] = useState(false)
    const location = useLocation();
    const search = location.state?.search || ""
    

    const params = useParams()
    const [article, setarticle] = useState()

    useEffect(() => {
        fetch(`/api/articles/${params.id}`)
            .then((res) => res.json())
            .then((data) => setarticle(data.articles))
    }, [params.id])
    
    function removeArticle() {
        let existingIds = JSON.parse(localStorage.getItem("articleInfo")) || [];
        
        existingIds = existingIds.filter((articleId) => articleId != params.id)
        localStorage.setItem("articleInfo", JSON.stringify(existingIds));
    }
    

    return (
        <>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased min-h-screen">
                <div  className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <>
  {/* Hello world */}
    {isModalOpen && (
    <div
        id="popup-modal"
        tabIndex={-1}
        className="fixed inset-0 flex items-center justify-center bg-black/50  z-50"
    >
        <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-700">

        
            <div className="p-4 md:p-5 text-center">
                
                <svg className="mx-auto mb-4 w-12 h-12 text-white size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>

            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Your article has been removed from Favorites.
            </h3>
            <Link to='/favorites'>
            <button 
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
            Got it
            </button>
            </Link>
        </div>
        </div>
    </div>
        )}

        </>
        
        {article ?(<article key={article.id} className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert text-white">
            <Link to={`..${search}`} relative='path'>
            <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-5 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 "
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
            </button>
            </Link>



            <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center justify-between mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src={`https://flowbite.com/docs/images/people/profile-picture-${article.id}.jpg`}
                    alt={`${article.author}`}
                />
                <div>
                    <Link
                    to="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                    {article.author}
                    </Link>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                    Graphic Designer, educator &amp; CEO Flowbite
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                    <time
                    >
                        {article ? (
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                <time>{article.date || "No date available"}</time>
                            </p>
                        ) : (
                            <p className="text-base text-gray-500 dark:text-gray-400">Loading...</p>
                        )}
                    </time>
                    </p>
                </div>
                </div>

                {/* Here is the bookmark button baby */}
                <Link>
                <button onClick={() =>{ 
                    removeArticle()
                    setIsModalOpen(true)
                    }}
                    className='bg-red-600 p-2 rounded-lg hover:bg-red-800'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5" />
                </svg>
                </button>


                </Link>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {article.title}
            </h1>
            </header>
            <p className='font-semibold leading-relaxed  mb-4'>
                {article.summary}
            </p>
            <p className='mt-2 leading-7'>
                {article.content}
            </p>
        </article>
        ): (
            <div className="flex justify-center items-center h-screen w-full">
            <div className="rounded-full h-20 w-20 bg-blue-600 animate-ping" />
            </div>

        )}
        </div>
    </main>


        </>
    )
}

export default FavoriteDetailPage;