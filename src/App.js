import React, { useState, useEffect } from 'react'
import './App.css';
import Ticker from './compoments/Ticker'
import News from './compoments/News';

function App() {
  const [loading, setLoading] = useState(true)
  const [company, setCompany] = useState([])

    // useEffect(() => {

    useEffect(() => {
     setLoading(true)
      //  fetch('https://api-v2.intrinio.com/companies/GOOG/fundamentals?api_key=OmVjYjY2ODE4YmFkMjg3MjExNjcwZDU2MzYyMmM2OTQy')
       fetch('https://api-v2.intrinio.com/companies/news?api_key=OmVjYjY2ODE4YmFkMjg3MjExNjcwZDU2MzYyMmM2OTQy')
       .then(res => res.json())
        .then(data => {
          setLoading(false)
          setCompany(data)
        })
          // setCompany({data: companyData})
        

     
     
    }, []);

    // console.log(company.news)

 
  if(loading) {
    return <p>loading...</p>
  }

  return (
    <div className="App">
        {/* {company.news && company.news.map(x => 
            <p>{x.title}</p>
        )} */}
        <Ticker company={company}/>
        <News news={company} />
    </div>
  );
}

export default App;
