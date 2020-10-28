import React from 'react'

const TickerResults = (props) => {
    console.log(props)
    return (
        <div>
            {props.ticker.data && props.ticker.data.map(x => <li>{x.symbol}</li>)}
        </div>
    )
}

export default TickerResults;