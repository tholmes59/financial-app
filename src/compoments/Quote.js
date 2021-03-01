import React, {useState, useEffect} from 'react';
import LoadingSpinner from './LoadingSpinner';

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

    if(loading){
        return <i class="fa fa-spinner fa-spin" style={{fontSize:"2rem"}}></i>
    }

    return (
        <div>
            <div>"{quote.content}"</div>
            <div>-{quote.author}</div>
        </div>
    );
}

export default Quote;