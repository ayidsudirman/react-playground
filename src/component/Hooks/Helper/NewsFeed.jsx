import React, { useEffect, useState } from 'react';
// Requirement
// 1. Request top headlines from newsapi.org
// 2. Show loading message while loading
// 3. Handle error
// 4. Add button's functionality 

const defaultNews = {
    status : "ok",
    totalResults: 0,
    articles: []
}

const endpoint = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=d4eef434bb2848cca69d497ef7eb2b42'

const NewsFeed = () => {
    const [news, setNews] = useState(defaultNews);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [isRefresh, setRefresh] = useState(false);

    useEffect( ()=> {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${endpoint}&${page}`)
                const result = await response.json()
                setNews(current => { // Component State -> updater funct / callback 10:09
                    return ({
                        ...result, // Component State -> rest param 08:15 
                        status: result.status,
                        totalResults: result.totalResults,
                        articles: [...current.articles, ...result.articles]
                    })
                })                
                if (result.status !== "ok") {
                    throw new Error('error')
                }
            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    },[page, isRefresh]) // Side Effect -> dependency 06.40

    const handlePage = () => setPage(currentState => currentState + 1)

    const handleRefresh = () => {
        setNews(defaultNews)
        handlePage()
        setLoading(false)
        setRefresh(false)
    }
    

    return ( 
        <>
            <p>Top News Headline</p>
            {isLoading && <p>Loading...</p>}
            {isError && <p>There is an error !</p>}
            <ol>
                {news.articles.map((item,index) => (
                    <li key={index}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></li>
                ))}
            </ol>
            {
                news.articles.length < news.totalResults ? (
                    <button onClick={handlePage} disabled={isLoading}>Load More</button>
                ) : null
            }
            <span>    </span>
            <button onClick={handleRefresh} disabled={isLoading}>Refresh</button>
        </>
     );
}
 
export default NewsFeed;