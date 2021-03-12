import React, {useState, useEffect} from 'react';

const TopNews = () => {

    const [topNews, setTopNews] = useState([])

    useEffect(() => {
        const loadTopNews = async () => {
            const news = await fetch(`https://api.currentsapi.services/v1/latest-news?language=en&apiKey=jByhIdldcnJhFEpjNJXLMwQC3F2hU8FLz274joQg2fsxGHu5`)
            .then(res => res.json())
            .then(data => data)
            setTopNews(news)
        }
        loadTopNews()
    }, [])

    console.log(topNews)
   
    return (
        <div>
            
        </div>
    );
}

export default TopNews;