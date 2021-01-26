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
                {props.metrics.data && <div>Cash Ratio: {companyMetrics('cashRatioTTM')}</div>}
                {props.metrics.data && <div>Asset Turnover: {companyMetrics('assetTurnoverTTM')}</div>}
                {props.metrics.data && <div>Cap Ex Coverage Ratio: {companyMetrics('capitalExpenditureCoverageRatioTTM')}</div>}
                {props.metrics.data && <div>Cash Conversion Cycle: {companyMetrics('cashConversionCycleTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('cashFlowCoverageRatiosTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('cashFlowToDebtRatioTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('cashPerShareTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('companyEquityMultiplierTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('currentRatioTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('daysOfInventoryOutstandingTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('daysOfPayablesOutstandingTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('daysOfSalesOutstandingTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('debtEquityRatioTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('debtRatioTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('dividendPaidAndCapexCoverageRatioTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('dividendYielPercentageTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('ebitPerRevenueTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('ebtPerEbitTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('effectiveTaxRateTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('enterpriseValueMultipleTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('fixedAssetTurnoverTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('freeCashFlowOperatingCashFlowRatioTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('freeCashFlowPerShareTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('grossProfitMarginTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('interestCoverageTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('inventoryTurnoverTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('longTermDebtToCapitalizationTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('netIncomePerEBTTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('netProfitMarginTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('operatingCashFlowPerShareTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('operatingCashFlowSalesRatioTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('operatingCycleTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('operatingProfitMarginTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('payablesTurnoverTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('payoutRatioTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('pretaxProfitMarginTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('priceCashFlowRatioTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('priceFairValueTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('priceToFreeCashFlowsRatioTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('priceToOperatingCashFlowsRatioTTM')}</div>}
                {props.metrics.data && <div>: {companyMetrics('quickRatioTTM')}</div>}
            </div>
        )}
        </>
    )
}

export default CompanyMetrics;