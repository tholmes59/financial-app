import React, {useState, useEffect} from 'react';

function Quote() {

    const [quote, setQuote] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const loadQuote = async () => {
            const quote = await fetch(`https://api.quotable.io/random`)
            .then(res => res.json())
            .then(data => data)
            setQuote(quote)
            setLoading(false)
        }
        loadQuote()
    }, [])

    return (
        <div>
            <div>"{quote.content}"</div>
            <div>-{quote.author}</div>
        </div>
    );
}

export default Quote;