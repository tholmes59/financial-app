import React, { useState, useEffect } from 'react'
import './App.css';
import Ticker from './Ticker'

function App() {

  const [company, setCompany] = useState([])

    // useEffect(() => {
    //   async function fetchData() {
    //     const companyData = await fetch('https://api-v2.intrinio.com/companies/AAPL/fundamentals?api_key=OmVjYjY2ODE4YmFkMjg3MjExNjcwZDU2MzYyMmM2OTQy')
    //     .then(res => res.json())
    //     .then(data => setCompany(data))
    //       // setCompany({data: companyData})
        
    //   }
    //   fetchData()
     
    // }, []);

    // console.log(company)

    useEffect(() => {
     
       fetch('https://api-v2.intrinio.com/companies/AAPL/fundamentals?api_key=OmVjYjY2ODE4YmFkMjg3MjExNjcwZDU2MzYyMmM2OTQy')
        .then(res => res.json())
        .then(data => setCompany(data))
          // setCompany({data: companyData})
        

     
     
    }, []);

    // console.log(company)

 


  return (
    <div className="App">
        <p>{company.company && company.company.ticker}</p>
        <Ticker company={company}/>

    </div>
  );
}

export default App;
