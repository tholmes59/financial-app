import React from 'react';
import moment from 'moment'


const NewsCard = (props) => {
    console.log(props)
    return (
            <div className="news-card-container">
            <div className="news-image-container">
                <img alt="CompanyLogo" src={props.news.urlToImage}></img>
            </div>
            <div className="news-container">
                <p><a href={props.news.url} target="_blank" rel="noopener noreferrer" className="news-title">{props.news.title}</a></p>
                <div>
                    By {props.news.author}
                </div>
                <div>
                    {props.news.source.name} - {moment(props.news.publishedAt).format('LLL')}
                </div>
                <div>{props.news.description}</div>
                
            </div>
            </div>
    )
}

export default NewsCard;