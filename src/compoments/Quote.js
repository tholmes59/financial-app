import React, {useState, useEffect} from 'react';

function Quote() {

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

    return (
        <div>
            
        </div>
    );
}

export default Quote;