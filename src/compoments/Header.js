import React, { useState, useEffect } from 'react';


const Header = () => {

    const [quote, setQuote] = useState([])

    useEffect(() => {
        const loadQuote = async () => {
            const quote = await fetch(`https://api.quotable.io/random`)
            .then(res => res.json())
            .then(data => data)
            setQuote({data: quote})
        }
        loadQuote()
    }, [])

    console.log(quote)

    return(
        <header>
            
        </header>
    )
}

export default Header;