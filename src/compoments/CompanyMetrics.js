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
            {props.metrics.data && props.metrics.data.map(x => <p>Price to Earnings: {(x.peRatioTTM).toFixed(2)}</p>)}
            {props.metrics.data && props.metrics.data.map(x => <p>Price to Book: {(x.ptbRatioTTM).toFixed(2)}</p>)}
            {props.metrics.data && props.metrics.data.map(x => <p>Price to Sales: {(x.priceToSalesRatioTTM).toFixed(2)}</p>)}
            {props.metrics.data && props.metrics.data.map(x => <p>ROE: {(x.roeTTM).toFixed(2)}</p>)}
            
        </div>
    )
}

export default CompanyMetrics;