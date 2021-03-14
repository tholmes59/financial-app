import React, {useState, useEffect} from 'react';
import TopNewsCard from './TopNewsCard';

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

    let articleArry = topNews.news
    console.log(articleArry)

    let articles = articleArry && articleArry.map((news, id) => 
        <TopNewsCard key={id} topNews={news}/>
    )
   
    return (
        <div>
            {articles}
        </div>
    );
}

export default TopNews;