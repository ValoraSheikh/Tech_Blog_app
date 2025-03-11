import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export let saveToLocalStorage = (id) => {
    const existingIds = JSON.parse(localStorage.getItem("articleInfo")) || [];
    
    if (existingIds.includes(id)) {
    return true; // Article is already added
    }

    // Otherwise, add the new ID
    existingIds.push(id);
    localStorage.setItem("articleInfo", JSON.stringify(existingIds));
    return false; // Indicates that it was newly added
};
    

function ArticleDetailPage() {
    const [isModalOpen , setIsModalOpen] = useState(false)
    const params = useParams()
    let [isFavorite, setisFavorite] = useState(false)
    const location = useLocation();
    const search = location.state?.search || ""
    const type = location.state?.type || "all"


    const [article, setarticle] = useState()

    useEffect(() => {
        fetch(`/api/articles/${params.id}`)
            .then((res) => res.json())
            .then((data) => setarticle(data.articles))
    }, [params.id])



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
        <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-center"
        >
            <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
            </svg>
            <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                    <svg
            className="mx-auto mb-4 w-12 h-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            >
            <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 
                22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
            </svg>

            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {isFavorite? "Your article is already added to favorite" : "Your article has been added to the Favorites tab. Click here to view it."}
            </h3>
            <Link to='/favorites'>
            <button 
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
            View Favorites
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
                <Link>
                        <button onClick={() => {
                            setIsModalOpen(true)
                            const added = saveToLocalStorage(`${article.id}`);
                            console.log(added);
                            setisFavorite(added); 
                        }}
                        type="button"
                        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                        >
                        <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 18"
                        >
                            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                        </svg>
                        <span className="sr-only">Icon description</span>
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

export default ArticleDetailPage

    {/* <aside
        aria-label="Related articles"
        className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
    >
        <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article className="max-w-xs">
            <a href="#">
                <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                className="mb-5 rounded-lg"
                alt="Image 1"
                />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Our first office</a>
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
            </p>
            <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
                Read in 2 minutes
            </a>
            </article>
            <article className="max-w-xs">
            <a href="#">
                <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                className="mb-5 rounded-lg"
                alt="Image 2"
                />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Enterprise design tips</a>
            </h2>
            <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
            </p>
            <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
                Read in 12 minutes
            </a>
            </article>
            <article className="max-w-xs">
            <a href="#">
                <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                className="mb-5 rounded-lg"
                alt="Image 3"
                />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">We partnered with Google</a>
            </h2>
            <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
            </p>
            <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
                Read in 8 minutes
            </a>
            </article>
            <article className="max-w-xs">
            <a href="#">
                <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                className="mb-5 rounded-lg"
                alt="Image 4"
                />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">Our first project with React</a>
            </h2>
            <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
            </p>
            <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
            >
                Read in 4 minutes
            </a>
            </article>
        </div>
        </div>
    </aside> */}