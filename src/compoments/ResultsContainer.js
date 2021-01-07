import React from 'react'
import CompanyProfile from './CompanyProfile'
import StockChart from './StockChart'
import CompanyMetrics from './CompanyMetrics'
import News from './News'

const ResultsContainer = ({company, metrics, news, price}) => {

    return(
        <div className="results-container">
            <CompanyProfile company={company}/>
            <StockChart price={price}/>
            <CompanyMetrics metrics={metrics}/>
            <News news={news}/>
        </div>
    )
}

export default ResultsContainer;