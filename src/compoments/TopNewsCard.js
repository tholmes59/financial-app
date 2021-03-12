import React from 'react';
import moment from 'moment'


const TopNewsCard = (props) => {
    console.log(props)
    return (
      <div className="news-card-container">
        <div className="news-image-container">
          <img alt="CompanyLogo" src={props.topNews.image}></img>
        </div>
        <div className="news-container">
          <p>
            <a
              href={props.topNews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-title"
            >
              {props.topNews.title}
            </a>
          </p>
          <div className="news-author">By {props.topNews.author}</div>
          <div className="news-source">
            {moment(props.topNews.publishedAt).format("LLL")}
          </div>
          <div className="news-description">{props.topNews.description}</div>
        </div>
      </div>
    );
}

export default TopNewsCard;