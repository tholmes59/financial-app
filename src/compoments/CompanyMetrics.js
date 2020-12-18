import React from 'react'

const CompanyMetrics = (props) => {
    console.log(props)
    console.log(props.metrics)
    
    // let peRatio = props.metrics.data && props.metrics.data.map(x => x.peRatioTTM).shift()
    // if(!peRatio) {
    //     peRatio = 'N/A'
    // } else {
    //     peRatio = peRatio.toFixed(2);
    // }
    // console.log(peRatio)
    function companyMetrics(metric){
        let value = metric.shift()
        if(!value) {
            return 'N/A'
        } else {
            return value.toFixed(2);
        }
    }
    return(
        <div>
            {/* {props.metrics.data && <p>P/E Ratio: {peRatio}</p>} */}
            {props.metrics.data && <p>P/E Ratio: {companyMetrics(props.metrics.data && props.metrics.data.map(x => (x.peRatioTTM)))}</p>}
            {props.metrics.data && <p>PEG Ratio: {companyMetrics(props.metrics.data && props.metrics.data.map(x => (x.pegRatioTTM)))}</p>}
            {/* {props.metrics.data && props.metrics.data.map(x => <p>Price to Earnings: {(x.peRatioTTM).toFixed(2)}</p>)}
            {props.metrics.data && props.metrics.data.map(x => <p>PEG Ratio: {(x.pegRatioTTM).toFixed(2)}</p>)}
            {props.metrics.data && props.metrics.data.map(x => <p>Price to Book: {(x.priceToBookRatioTTM).toFixed(2)}</p>)}
            {props.metrics.data && props.metrics.data.map(x => <p>Price to Sales: {(x.priceToSalesRatioTTM).toFixed(2)}</p>)}
            {props.metrics.data && props.metrics.data.map(x => <p>ROE: {(x.returnOnEquityTTM).toFixed(2)}</p>)} */}
            
        </div>
    )
}

export default CompanyMetrics;