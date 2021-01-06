import React from 'react';


const NewsCard = (props) => {
    console.log(props)
    return (
        <div className="news-container">
            <p><a href={props.news.url} target="_blank" rel="noopener noreferrer" className="news-title">{props.news.title}</a></p>
            <div>
                By {props.news.author}
            </div>
            <div>
                {props.news.source.name} - {props.news.publishedAt}
            </div>
            <div>{props.news.description}</div>
        </div>
    )
}

export default NewsCard;