import React, { useState, useEffect } from 'react'
import './App.css';
import Ticker from './compoments/Ticker'
import News from './compoments/News';
import SearchTicker from './compoments/SearchTicker'
import TickerResults from './compoments/TickerResults'
import SearchCompanyProfile from './compoments/SearchCompanyProfile';

function App() {
  const [loading, setLoading] = useState(true)
  const [company, setCompany] = useState([])
  const [price, setPrice] = useState([])
  const [symbol, setSymbol] = useState([])
  const [news, setNews] = useState([])

    // useEffect(() => {

    // useEffect(() => {
    //  setLoading(true)
    //   //  fetch('https://api-v2.intrinio.com/companies/GOOG/fundamentals?api_key=OmVjYjY2ODE4YmFkMjg3MjExNjcwZDU2MzYyMmM2OTQy')
    //    fetch('https://api-v2.intrinio.com/companies/news?api_key=OmVjYjY2ODE4YmFkMjg3MjExNjcwZDU2MzYyMmM2OTQy')
    //    .then(res => res.json())
    //     .then(data => {
    //       setLoading(false)
    //       setCompany(data)
    //     })
    //       setCompany({data: companyData})
    // }, []);

    // console.log(company.news)

    useEffect(() => {
    //  setLoading(true)
      //  fetch('https://api-v2.intrinio.com/companies/GOOG/fundamentals?api_key=OmVjYjY2ODE4YmFkMjg3MjExNjcwZDU2MzYyMmM2OTQy')
       fetch('https://newsapi.org/v2/top-headlines?q=Apple&apiKey=236f90419a1d4edd8fc1e698c62220af')
       .then(res => res.json())
        .then(data => {
          // setLoading(false)
          setNews(data)
        })
          setNews({data: news})
    }, []);

    console.log(news)

    // useEffect(() => {
    //   setLoading(true)
    //     fetch('https://www.alphavantage.co/query?function=OVERVIEW&symbol=GOOGL&outputsize=full&apikey=6QNU5ORX2JVNZQDT')
    //     .then(res => res.json())
    //      .then(data => {
    //        setLoading(false)
    //        setPrice(data)
    //      })
    //        setCompany({data: companyData})
    //  }, []);

    //  console.log(price)

    async function fetchTicker(e) {
      let val = e.target.symbol.value
      console.log(val)
      e.preventDefault() 
      
      // setLoading(true)
        const symbolData = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${val}&apikey=3981e8e851120273545312697c324333`)
          .then(res => res.json())
          .then(data => data)
            // setLoading(false)
            setSymbol({data: symbolData})
    }
      //  useEffect(() => {
      //   setLoading(true)
      //     fetch(`https://financialmodelingprep.com/api/v3/search?query=${ticker}&apikey=3981e8e851120273545312697c324333`)
      //     .then(res => res.json())
      //      .then(data => {
      //        setLoading(false)
      //        setSymbol(data)
      //      })
      //        // setCompany({data: companyData})
      //  }, []);
     console.log(symbol.data) 

     async function fetchCompanyProfile(e) {
      let company = e.target.ticker.value
      console.log(company)
      e.preventDefault() 
      
      // setLoading(true)
        const companyData = await fetch(`https://financialmodelingprep.com/api/v3/profile/${company}?apikey=3981e8e851120273545312697c324333`)
          .then(res => res.json())
          .then(data => data)
            // setLoading(false)
            setCompany({data: companyData})
    }

    console.log(company.data)
 
  // if(loading) {
  //   return <p>loading...</p>
  // }

  return (
    <div className="App">
        <SearchTicker getTicker={fetchTicker}/>
        <SearchCompanyProfile getCompanyProfile={fetchCompanyProfile}/>
        <TickerResults ticker={symbol}/>
        {/* <Ticker company={company}/>
        <News news={company} /> */}
    </div>
  );
}

export default App;
