import React from 'react'

const CompanyMetrics = (props) => {
    console.log(props)
    console.log(props.metrics)
    return(
        <div>
            {props.metrics.data && props.metrics.data.map(x => <p>Market Cap: {x.marketCapTTM}</p>)}
        </div>
    )
}

export default CompanyMetrics;