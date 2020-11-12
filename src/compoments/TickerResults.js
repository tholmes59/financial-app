import React from 'react'

const TickerResults = (props) => {
    console.log(props)
    return (
        <div>
            {props.ticker.data && props.ticker.data.map(x => <p>{x.symbol} | {x.name}</p>)}
        </div>
    )
}

export default TickerResults;