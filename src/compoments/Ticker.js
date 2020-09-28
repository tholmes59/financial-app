import React from 'react'

const Ticker = (props) => {
    console.log(props.company.company && props.company.company.name)
    return (
        <div>
            <p>Test</p>
            <p>{props.company.company && props.company.company.ticker}</p>
        </div>
    )
}

export default Ticker;