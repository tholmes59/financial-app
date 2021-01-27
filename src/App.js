import React, { useState } from 'react'
import './App.css';
import SearchTicker from './compoments/SearchTicker'
import TickerResults from './compoments/TickerResults'
import SearchCompanyProfile from './compoments/SearchCompanyProfile';
import ResultsContainer from './compoments/ResultsContainer';
import Header from './compoments/Header';

function App() {
  const [loading, setLoading] = useState(false)
  const [company, setCompany] = useState([])
  const [price, setPrice] = useState([])
  const [symbol, setSymbol] = useState([])
  const [news, setNews] = useState([])
  const [viewTickers, setViewTickers] = useState(true)
  const [keyMetrics, setKeyMetrics] = useState([])
  const [tickerError, setTickerError] = useState()

  async function fetchTicker(e) {
    if(!viewTickers) setViewTickers(true)
    let val = e.target.symbol.value
    console.log(val)
    e.preventDefault() 
    e.target.reset()
    // setLoading(true)
      const symbolData = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${val}&apikey=3981e8e851120273545312697c324333`)
        .then(res => res.json())
        .then(data => data)
          // setLoading(false)
          if(val){
            setSymbol({
              data: symbolData,
              error: ""
            })
          } else {
            setSymbol({
              data: "",
              error: "please enter valid company name"
            })
          }
          if(symbol.data && symbol.data.length === 0){
            setTickerError(
              "please enter valid company name"
            )
          }
  }
  console.log(symbol)
  console.log(symbol.data && symbol.data.length)
  console.log(tickerError)

  async function fetchCompanyProfile(e) {
    console.log(e.target.innerHTML)
  // let company = e.target.ticker.value
    let companyTicker = '';
    if(e.target.ticker){
      companyTicker = e.target.ticker.value
    } else {
      // companyTicker = e.target.innerHTML;
      companyTicker = e.target.innerHTML.split(' ').shift();
    }
    console.log(companyTicker)
    e.preventDefault() 
    if(e.target.ticker) e.target.reset()
    setLoading(true)
    const companyData = await fetch(`https://financialmodelingprep.com/api/v3/profile/${companyTicker}?apikey=3981e8e851120273545312697c324333`)
      .then(res => res.json())
      .then(data => data)
      setCompany({data: companyData})
      setLoading(false)
        console.log(company)

    fetchPrice(companyTicker)

    let name = companyData && companyData.map(x => 
      x.companyName.split(' ').shift()
      )
    console.log(name)
    fetchCompanyNews(name)
    fetchKeyMetrics(companyTicker)

    // let logoUrl = companyData && companyData.map(x => 
    //   x.website
    //   )
    // console.log(logoUrl)
    // fetchCompanyLogo(logoUrl)
      // setViewTickers(!viewTickers)
    if(viewTickers) setViewTickers(false)
  }

  console.log(company.data)

  async function fetchCompanyNews(e) {
    let name = e
    const companyNews = await fetch(`https://newsapi.org/v2/everything?q=${name}&language=en&apiKey=236f90419a1d4edd8fc1e698c62220af`)
      .then(res => res.json())
      .then(data => data)
        setNews({data: companyNews})
  }

  console.log(news)
  // if(loading) {
  //   return <p>loading...</p>
  // }

  async function fetchPrice(e) {
    let ticker = e
    const companyPrice = await fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?serietype=line&apikey=3981e8e851120273545312697c324333`)
      .then(res => res.json())
      .then(data => data)
        setPrice({data: companyPrice})
  }

console.log(price)

  async function fetchKeyMetrics(e){
    let ticker = e
    const companyMetrics = await fetch(`https://financialmodelingprep.com/api/v3/ratios-ttm/${ticker}?limit=1&apikey=3981e8e851120273545312697c324333`)
      .then(res => res.json())
      .then(data => data)
        setKeyMetrics({data: companyMetrics})
  }

  console.log(keyMetrics)

  function closeTickerWindow(){
    if(viewTickers) setViewTickers(false)
  }

  return (
    <div className="App">
        <Header />
      <div className="search-container">
        <SearchCompanyProfile getCompanyProfile={fetchCompanyProfile}/>
        <div>
          <SearchTicker getTicker={fetchTicker}/>
          {viewTickers && <TickerResults ticker={symbol} getTickerResults={fetchCompanyProfile} closeWindow={closeTickerWindow} tickerError={tickerError}/>}
        </div>
      </div>
        {/* <TickerResults ticker={symbol} getTickerResults={fetchCompanyProfile}/> */}
        {/* <CompanyProfile company={company}/>
        <CompanyMetrics metrics={keyMetrics}/>
        <News news={news}/>
        <StockChart price={price}/> */}
        <ResultsContainer company={company} metrics={keyMetrics} news={news} price={price} loading={loading}/>
    </div>
  );
}

export default App;
