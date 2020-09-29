import React from 'react'
import NewsCard from './NewsCard'

const News = (props) => {
    console.log(props.news.news && props.news.news)

    const newsCards = 
        props.news.news && props.news.news.map(news => 
            <NewsCard key={news.id} news={news}/>
        )

    return (
        <div>
            <p>Test News</p>
            <div>
                {newsCards}
            </div>
        </div>
    )
}

export default News;