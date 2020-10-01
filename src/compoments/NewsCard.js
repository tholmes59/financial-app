import React from 'react';


const NewsCard = (props) => {

    return (
        <div>
            <p>{props.news.title}</p>
            <p>{props.news.summary}</p>
        </div>
    )
}

export default NewsCard;