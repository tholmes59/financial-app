import React, { useState, useEffect } from 'react';
import Quote from './Quote';


const Header = () => {

    // const [quote, setQuote] = useState([])

    // useEffect(() => {
    //     const loadQuote = async () => {
    //         const quote = await fetch(`https://api.quotable.io/random`)
    //         .then(res => res.json())
    //         .then(data => data)
    //         setQuote(quote)
    //     }
    //     loadQuote()
    // }, [])
  
    return(
        <header>
            <div className="header-container">
                <div className="header-title">InvestorInfo</div>
                {/* <div>"{quote.content}"</div>
                <div>-{quote.author}</div> */}
                <Quote/>
            </div>
        </header>
    )
}

export default Header;