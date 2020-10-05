import React from 'react';


const NewsCard = (props) => {

    return (
        <div>
            <p><a href={props.news.url} target="_blank" rel="noopener noreferrer">{props.news.title}</a></p>
            <p>{props.news.summary}</p>
        </div>
    )
}

export default NewsCard;