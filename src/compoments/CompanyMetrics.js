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
            {props.metrics.data && <p>P/E Ratio: {companyMetrics(peRatio)}</p>}
            {props.metrics.data && <p>PEG Ratio: {companyMetrics(pegRatio)}</p>}
            {props.metrics.data && <p>P/B: {companyMetrics(pbRatio)}</p>}
            {props.metrics.data && <p>P/S: {companyMetrics(psRatio)}</p>}
            {props.metrics.data && <p>ROE: {companyMetrics(roeRatio)}</p>}
            {props.metrics.data && <p>Dividend Yield: {companyMetrics(dividendYield)}</p>}
        </div>
    )
}

export default CompanyMetrics;