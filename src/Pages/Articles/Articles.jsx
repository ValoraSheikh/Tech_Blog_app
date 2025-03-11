import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

function Articles() {
    const [articles, setarticle] = useState([]);
    const [searchParams, setsearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")

    useEffect(() => {
        fetch("/api/articles")
            .then((res) => res.json())
            .then((data) => setarticle(data.articles))
    }, [])

    const displayArticle = typeFilter
        ?articles.filter(article => article.type === typeFilter)
        :articles

    const blogElement = displayArticle.map((article) => (
        <Link to={article.id}>
        <article key={article.id} className="p-6 bg-white rounded-lg border  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" state={{search: `?${searchParams.toString()}`, type:typeFilter}}>

            <div className="flex justify-between items-center mb-5 text-gray-500">
            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                    Article
                </span>
                <span className="text-sm">{article.date}</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{article.title}</a>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                {article.summary}
            </p>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                <img
                    className="w-7 h-7 rounded-full"
                    src={`https://flowbite.com/docs/images/people/profile-picture-${article.id}.jpg`}
                    alt={`${article.author}`}
                />
                <span className="font-medium dark:text-white">{article.author}</span>
                </div>
                <a
                href="#"
                className="inline-flex text-blue-600 items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                Read more
                <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>
            </div>
            </article>
            </Link>
    ))

    function handleFilterChange(key, value) {
        setsearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }


    const commonClasses ="font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-10 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:border-gray-600 dark:focus:ring-gray-800 hover:bg-gray-800";

    const activeClasses = "bg-gray-800 text-white border border-gray-600";
    const inactiveClasses = "text-gray-800 text-white hover:text-white border border-gray-800 ";

    return (
            <>
  {/* Hello world */}
    

    {articles.length > 0 ? (
            <section className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Blog
                </h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                We use an agile approach to test assumptions and connect with the
                needs of your audience early and often.
                </p>
            </div>

            <div>

            {/* <button onClick={() => handleFilterChange("type", "React")} type="button" class={`${typeFilter === "React" ? "bg-gray-900 text-white" : ""} text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-10 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800`}>React</button>

            <button onClick={() => handleFilterChange("type", "AI")} type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-10 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">AI</button>

            <button onClick={() => handleFilterChange("type", "Computing")} type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-10 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Computing</button>

            {typeFilter ? (
                <button
                    onClick={() => handleFilterChange("type", null)}
                    className="text-white m-10"
                >Clear filter</button>
            ) : null} */}

        <button
            onClick={() => handleFilterChange("type", "React")}
            type="button"
            className={`${commonClasses} ${
                typeFilter === "React" ? activeClasses : inactiveClasses
            }`}
            >
            React
            </button>

            <button
            onClick={() => handleFilterChange("type", "AI")}
            type="button"
            className={`${commonClasses} ${
                typeFilter === "AI" ? activeClasses : inactiveClasses
            }`}
            >
            AI
            </button>

            <button
            onClick={() => handleFilterChange("type", "Computing")}
            type="button"
            className={`${commonClasses} ${
                typeFilter === "Computing" ? activeClasses : inactiveClasses
            }`}
            >
            Computing
            </button>

            {typeFilter && (
            <button
                onClick={() => handleFilterChange("type", null)}
                className="text-white m-10"
            >
                Clear filter
            </button>
            )}

            </div>
            

            <div className="grid gap-8 lg:grid-cols-2">
            { blogElement}
            </div>
            </div>
        </section>
        ) : (

            <div className="flex justify-center bg-gray-900 items-center h-screen w-full">
            <div className="rounded-full h-20 w-20 bg-blue-600 animate-ping" />
            </div>
        )}
            </>
    )
}

export default Articles