import React, { useState, useEffect } from 'react';


const Header = () => {

    const [quote, setQuote] = useState([])

    useEffect(() => {
        const loadQuote = async () => {
            const quote = await fetch(`https://api.quotable.io/random`)
            .then(res => res.json())
            .then(data => data)
            setQuote(quote)
        }
        loadQuote()
    }, [])
  
    return(
        <header>
            <h2>InvestorInfo</h2>
            <p>"{quote.content}"</p>
            <p>-{quote.author}</p>
        </header>
    )
}

export default Header;