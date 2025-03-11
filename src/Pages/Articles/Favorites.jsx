import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EmptyBlogPage from '../../components/EmptyBlogPage';


function Favorites() {
    const [articles, setarticles] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
            fetch("/api/articles")
                .then((res) => res.json())
                .then((data) => setarticles(data.articles))
                .catch((err) => console.error("Error fetching articles:", err));
        }, [])
        //Prevent errors if articles are not loaded yet
        // if (!articles.length) {
        //     return <div>Loading...</div>;
        // }
    

    const localStoItem = JSON.parse(localStorage.getItem("articleInfo")) || [];
    console.log(localStoItem);

    useEffect(() => {
        if (localStoItem.length == 0) {
            navigate('/favorites/emptyPage')
        }
        
    }, [localStoItem])
    

    let renderArticle = localStoItem.map((element) => {
        let favArticle = articles.find((article) => article.id == element);
        if (favArticle) {
            return(
                <Link to={favArticle.id}>
                        <article key={favArticle.id} className="p-6 bg-white rounded-lg border  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                    <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                    Article
                                </span>
                                <span className="text-sm">{favArticle.date}</span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">{favArticle.title}</a>
                            </h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                                {favArticle.summary}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-4">
                                <img
                                    className="w-7 h-7 rounded-full"
                                    src={`https://flowbite.com/docs/images/people/profile-picture-${favArticle.id}.jpg`}
                                    alt={`${favArticle.author}`}
                                />
                                <span className="font-medium dark:text-white">{favArticle.author}</span>
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
            )
        }
        
    })
    

    
    return (
        <>
  {/* Hello world */}
    

    {articles.length > 0 ? (
            <section className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Favorite Articles are Here
                </h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                We use an agile approach to test assumptions and connect with the
                needs of your audience early and often.
                </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
            { renderArticle}
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


export default Favorites
