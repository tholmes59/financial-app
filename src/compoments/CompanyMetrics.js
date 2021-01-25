import React from 'react'

const CompanyMetrics = (props) => {
    console.log(props)
    console.log(props.metrics)
    
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
    let longTermDebtToCapitalization = props.metrics.data && props.metrics.data.map(x => x.longTermDebtToCapitalizationTTM)
    let netIncomePerEBT = props.metrics.data && props.metrics.data.map(x => x.netIncomePerEBTTTM)
    let netProfitMargin = props.metrics.data && props.metrics.data.map(x => x.netProfitMarginTTM)
    let operatingCashFlowPerShare = props.metrics.data && props.metrics.data.map(x => x.operatingCashFlowPerShareTTM)
    let operatingCashFlowSalesRatio = props.metrics.data && props.metrics.data.map(x => x.operatingCashFlowSalesRatioTTM)
    let operatingCycle = props.metrics.data && props.metrics.data.map(x => x.operatingCycleTTM)
    let operatingProfitMargin = props.metrics.data && props.metrics.data.map(x => x.operatingProfitMarginTTM)
    let payablesTurnover = props.metrics.data && props.metrics.data.map(x => x.payablesTurnoverTTM)
    let payoutRatio = props.metrics.data && props.metrics.data.map(x => x.payoutRatioTTM)
    let preTaxProfitMargin = props.metrics.data && props.metrics.data.map(x => x.pretaxProfitMarginTTM)

    // function example(val){
    //     return props.metrics.data && props.metrics.data.map(x => x[val])
    // }
    function companyMetrics(val){
        let num = props.metrics.data && props.metrics.data.map(x => x[val])
        let value = num.shift()
        if(!value) {
            return 'N/A'
        } else {
            return value.toFixed(2);
        }
    }
    
    // function companyMetrics(metric){
    //     let value = metric.shift()
    //     if(!value) {
    //         return 'N/A'
    //     } else {
    //         return value.toFixed(2);
    //     }
    // }
    return(
        <>
        {props.metrics.data && (
            <div>
                <div>Valuation Metrics</div>
                {props.metrics.data && <div>P/E Ratio: {companyMetrics('peRatioTTM')}</div>}
                {props.metrics.data && <div>PEG Ratio: {companyMetrics('pegRatioTTM')}</div>}
                {props.metrics.data && <div>P/B: {companyMetrics('priceToBookRatioTTM')}</div>}
                {props.metrics.data && <div>P/S: {companyMetrics('priceToSalesRatioTTM')}</div>}
                {props.metrics.data && <div>ROE: {companyMetrics('returnOnEquityTTM')}</div>}
                {props.metrics.data && <div>Dividend Yield: {companyMetrics('dividendYieldTTM')}</div>}
                {props.metrics.data && <div>Pre Tax2: {companyMetrics('peRatioTTM')}</div>}
            </div>
        )}
        </>
    )
}

export default CompanyMetrics;