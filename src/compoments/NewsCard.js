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
          <p>
            <a
              href={props.news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-title"
            >
              {props.news.title}
            </a>
          </p>
          <div className="news-author">By {props.news.author}</div>
          <div className="news-source">
            {props.news.source.name} -{" "}
            {moment(props.news.publishedAt).format("LLL")}
          </div>
          <div className="news-description">{props.news.description}</div>
        </div>
      </div>
    );
}

export default NewsCard;