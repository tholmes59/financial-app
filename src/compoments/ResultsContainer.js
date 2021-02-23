import React, { useState } from 'react'
import CompanyProfile from './CompanyProfile'
import StockChart from './StockChart'
import CompanyMetrics from './CompanyMetrics'
import News from './News'
import LoadingSpinner from './LoadingSpinner'

const ResultsContainer = ({company, metrics, news, price, loading}) => {
    // console.log(news && news.data)
    // const [currentPage, setCurrentPage] = useState(1);
    // const [storiesPerPage] = useState(10);

    // const indexOfLastStory = currentPage * storiesPerPage;
    // const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    // const currentStories = news.data && news.data.articles.slice(indexOfFirstStory, indexOfLastStory);
    // const totalStories = news.data && news.data.articles
   
    if (loading) {
        return (
            <div className="spinner-container">
                <LoadingSpinner/>
            </div>
            )
    }
    return(
        <div className="results-container">
            <CompanyProfile company={company}/>
            <StockChart price={price}/>
            <CompanyMetrics metrics={metrics}/>
            {/* <News news={currentStories} totalStories={totalStories}/> */}
            <News news={news}/>
        </div>
    )
}

export default ResultsContainer;