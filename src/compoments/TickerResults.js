import React from 'react'

const TickerResults = (props) => {
    console.log(props)
    let handleClick = e => {
        e.preventDefault()
        props.getTicker(e)
        document.getElementById('tickerResults').innerHTML = ''
    }
    return (
        <div id="tickerResults">
            {props.ticker.data && props.ticker.data.map(x => <p name="ticker" value={x.symbol} onClick={handleClick}>{x.symbol}</p>)}
        </div>
    )
}

export default TickerResults;