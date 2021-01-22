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
    let cashRatio = props.metrics.data && props.metrics.data.map(x => x.cashRatioTTM)
    let assetTurnover = props.metrics.data && props.metrics.data.map(x => x.assetTurnoverTTM)
    let capitalExpenditureCoverageRatio = props.metrics.data && props.metrics.data.map(x => x.capitalExpenditureCoverageRatioTTM)
    let cashConversionCycle = props.metrics.data && props.metrics.data.map(x => x.cashConversionCycleTTM)
    let cashFlowCoverageRatios = props.metrics.data && props.metrics.data.map(x => x.cashFlowCoverageRatiosTTM)
    let cashFlowToDebtRatio = props.metrics.data && props.metrics.data.map(x => x.cashFlowToDebtRatioTTM)
    let cashPerShare = props.metrics.data && props.metrics.data.map(x => x.cashPerShareTTM)
    let companyEquityMultiplier = props.metrics.data && props.metrics.data.map(x => x.companyEquityMultiplierTTM)
    let currentRatio = props.metrics.data && props.metrics.data.map(x => x.currentRatioTTM)
    let daysOfInvestoryOutstanding = props.metrics.data && props.metrics.data.map(x => x.daysOfInvestoryOutstandingTTM)
    let daysOfPayablesOutstanding = props.metrics.data && props.metrics.data.map(x => x.daysOfPayablesOutstandingTTM)
    let daysOfSalesOutstanding = props.metrics.data && props.metrics.data.map(x => x.daysOfSalesOutstandingTTM)
    let debtEquityRatio = props.metrics.data && props.metrics.data.map(x => x.debtEquityRatioTTM)
    let debtRatio = props.metrics.data && props.metrics.data.map(x => x.debtRatioTTM)
    let dividendPaidAndCapexCoverageRatio = props.metrics.data && props.metrics.data.map(x => x.dividendPaidAndCapexCoverageRatioTTM)
    let dividendYieldPercentage = props.metrics.data && props.metrics.data.map(x => x.dividendYieldPercentageTTM)
    let ebitPerRevenue = props.metrics.data && props.metrics.data.map(x => x.ebitPerRevenueTTM)
    let ebtPerEbit = props.metrics.data && props.metrics.data.map(x => x.ebtPerEbitTTM)
    let effectiveTaxRate = props.metrics.data && props.metrics.data.map(x => x.effectiveTaxRateTTM)
    let enterpriseValueMultiple = props.metrics.data && props.metrics.data.map(x => x.enterpriseValueMultipleTTM)
    let fixedAssetTurover = props.metrics.data && props.metrics.data.map(x => x.fixedAssetTuroverTTM)
    let freeCashFlowOperatingCashFlowRatio = props.metrics.data && props.metrics.data.map(x => x.freeCashFlowOperatingCashFlowRatioTTM)
    let freeCashFlowPerShare = props.metrics.data && props.metrics.data.map(x => x.freeCashFlowPerShareTTM)
    let grossProfitMargin = props.metrics.data && props.metrics.data.map(x => x.grossProfitMarginTTM)
    let interestCoverage = props.metrics.data && props.metrics.data.map(x => x.interestCoverageTTM)
    let inventoryTurnover = props.metrics.data && props.metrics.data.map(x => x.inventoryTurnoverTTM)
    
    function companyMetrics(metric){
        let value = metric.shift()
        if(!value) {
            return 'N/A'
        } else {
            return value.toFixed(2);
        }
    }
    return(
        <>
        {props.metrics.data && (
            <div>
                <div>Valuation Metrics</div>
                {props.metrics.data && <div>P/E Ratio: {companyMetrics(peRatio)}</div>}
                {props.metrics.data && <div>PEG Ratio: {companyMetrics(pegRatio)}</div>}
                {props.metrics.data && <div>P/B: {companyMetrics(pbRatio)}</div>}
                {props.metrics.data && <div>P/S: {companyMetrics(psRatio)}</div>}
                {props.metrics.data && <div>ROE: {companyMetrics(roeRatio)}</div>}
                {props.metrics.data && <div>Dividend Yield: {companyMetrics(dividendYield)}</div>}
            </div>
        )}
        </>
    )
}

export default CompanyMetrics;