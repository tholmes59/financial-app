import React from 'react'

const CompanyMetrics = (props) => {
    console.log(props)
    console.log(props.metrics)
    
    let peRatio = props.metrics.data && props.metrics.data.map(x => x.peRatioTTM)
    let pegRatio = props.metrics.data && props.metrics.data.map(x => x.pegRatioTTM)
    let pbRatio = props.metrics.data && props.metrics.data.map(x => x.priceToBookRatioTTM)
    let psRatio = props.metrics.data && props.metrics.data.map(x => x.priceToSalesRatioTTM)
    let roeRatio = props.metrics.data && props.metrics.data.map(x => x.returnOnEquityTTM)
    let dividendYield = props.metrics.data && props.metrics.data.map(x => x.dividendYieldTTM)
  
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
            {props.metrics.data && <div>P/E Ratio: {companyMetrics(peRatio)}</div>}
            {props.metrics.data && <div>PEG Ratio: {companyMetrics(pegRatio)}</div>}
            {props.metrics.data && <div>P/B: {companyMetrics(pbRatio)}</div>}
            {props.metrics.data && <div>P/S: {companyMetrics(psRatio)}</div>}
            {props.metrics.data && <div>ROE: {companyMetrics(roeRatio)}</div>}
            {props.metrics.data && <div>Dividend Yield: {companyMetrics(dividendYield)}</div>}
        </div>
    )
}

export default CompanyMetrics;