import React from 'react'

const CompanyMetrics = (props) => {
    console.log(props)
    console.log(props.metrics)
    let marketCap;
    if((props.metrics.data && props.metrics.data.map(x => x.marketCapTTM)) < 1000000000){
        marketCap = ((props.metrics.data && props.metrics.data.map(x => x.marketCapTTM))/1000000) + 'M'
    }
    if((props.metrics.data && props.metrics.data.map(x => x.marketCapTTM)) < 1000000000000){
        marketCap = ((props.metrics.data && props.metrics.data.map(x => x.marketCapTTM))/1000000000) + 'B'
    }
    else {
        marketCap = ((props.metrics.data && props.metrics.data.map(x => x.marketCapTTM))/1000000000000) + 'T'
    }
    console.log(marketCap)
    return(
        <div>
            {props.metrics.data && props.metrics.data.map(x => <p>Market Cap: {x.marketCapTTM}</p>)}
        </div>
    )
}

export default CompanyMetrics;