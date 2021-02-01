import React from 'react'

const CompanyMetrics = (props) => {
    console.log(props)
    console.log(props.metrics)
    
    function companyMetrics(val){
        let num = props.metrics.data && props.metrics.data.map(x => x[val])
        let value = num.shift()
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
                <div>
                    Profitability Ratios
                </div>
                <div>
                    Liquidity Ratios
                </div>
                <div>
                    Activity Ratios
                </div>
                <div>
                    Leverage Ratios
                </div>
                <div>
                    Market Ratios
                </div>
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
                {props.metrics.data && <div>Cash Flow Coverage Ratio: {companyMetrics('cashFlowCoverageRatiosTTM')}</div>}
                {props.metrics.data && <div>Cash Flow to Debt Ratio: {companyMetrics('cashFlowToDebtRatioTTM')}</div>}
                {props.metrics.data && <div>Cash per Share: {companyMetrics('cashPerShareTTM')}</div>}
                {props.metrics.data && <div>Company Equity Multiplier: {companyMetrics('companyEquityMultiplierTTM')}</div>}
                {props.metrics.data && <div>Current Ratio: {companyMetrics('currentRatioTTM')}</div>}
                {props.metrics.data && <div>Days Inventory Outstanding: {companyMetrics('daysOfInventoryOutstandingTTM')}</div>}
                {props.metrics.data && <div>Days Payables Outstanding: {companyMetrics('daysOfPayablesOutstandingTTM')}</div>}
                {props.metrics.data && <div>Days Sales Outstanding: {companyMetrics('daysOfSalesOutstandingTTM')}</div>}
                {props.metrics.data && <div>Debt to Equity Ratio: {companyMetrics('debtEquityRatioTTM')}</div>}
                {props.metrics.data && <div>Debt Ratio: {companyMetrics('debtRatioTTM')}</div>}
                {props.metrics.data && <div>Dividend Paid and Capex Coverage Ratio: {companyMetrics('dividendPaidAndCapexCoverageRatioTTM')}</div>}
                {props.metrics.data && <div>Dividend Yield %: {companyMetrics('dividendYielPercentageTTM')}</div>}
                {props.metrics.data && <div>EBIT per Revenue: {companyMetrics('ebitPerRevenueTTM')}</div>}
                {props.metrics.data && <div>EBT per EBIT: {companyMetrics('ebtPerEbitTTM')}</div>}
                {props.metrics.data && <div>Effective Tax Rate: {companyMetrics('effectiveTaxRateTTM')}</div>}
                {props.metrics.data && <div>Enterprise Value Multiple: {companyMetrics('enterpriseValueMultipleTTM')}</div>}
                {props.metrics.data && <div>Fixed Asset Turnover: {companyMetrics('fixedAssetTurnoverTTM')}</div>}
                {props.metrics.data && <div>Free Cash Flow to Operating Cash Flow Ratio: {companyMetrics('freeCashFlowOperatingCashFlowRatioTTM')}</div>}
                {props.metrics.data && <div>Free Cash FLow per Share: {companyMetrics('freeCashFlowPerShareTTM')}</div>}
                {props.metrics.data && <div>Gross Profit Margin: {companyMetrics('grossProfitMarginTTM')}</div>}
                {props.metrics.data && <div>Interest Coverage Ratio: {companyMetrics('interestCoverageTTM')}</div>}
                {props.metrics.data && <div>Inventory Turnover: {companyMetrics('inventoryTurnoverTTM')}</div>}
                {props.metrics.data && <div>Long Term Debt to Capitalization: {companyMetrics('longTermDebtToCapitalizationTTM')}</div>}
                {props.metrics.data && <div>Net Income per EBT: {companyMetrics('netIncomePerEBTTTM')}</div>}
                {props.metrics.data && <div>Net Profit Margin: {companyMetrics('netProfitMarginTTM')}</div>}
                {props.metrics.data && <div>Operating Cash Flow per Share: {companyMetrics('operatingCashFlowPerShareTTM')}</div>}
                {props.metrics.data && <div>Operating Cash Flow to Sales Ratio: {companyMetrics('operatingCashFlowSalesRatioTTM')}</div>}
                {props.metrics.data && <div>Operating Cycle: {companyMetrics('operatingCycleTTM')}</div>}
                {props.metrics.data && <div>Operating Profit Margin: {companyMetrics('operatingProfitMarginTTM')}</div>}
                {props.metrics.data && <div>Payables Turnover: {companyMetrics('payablesTurnoverTTM')}</div>}
                {props.metrics.data && <div>Payout Ratio: {companyMetrics('payoutRatioTTM')}</div>}
                {props.metrics.data && <div>Pretax Profit Margin: {companyMetrics('pretaxProfitMarginTTM')}</div>}
                {props.metrics.data && <div>Price to Cash Flow Ratio: {companyMetrics('priceCashFlowRatioTTM')}</div>}
                {props.metrics.data && <div>Price Fair Value: {companyMetrics('priceFairValueTTM')}</div>}
                {props.metrics.data && <div>Price to Free Cash Flow Ratio: {companyMetrics('priceToFreeCashFlowsRatioTTM')}</div>}
                {props.metrics.data && <div>Price to Operating Cash Flow Ratio: {companyMetrics('priceToOperatingCashFlowsRatioTTM')}</div>}
                {props.metrics.data && <div>Quick Ratio: {companyMetrics('quickRatioTTM')}</div>}
                {props.metrics.data && <div>Receivables Turnover: {companyMetrics('receivablesTurnoverTTM')}</div>}
                {props.metrics.data && <div>Return on Assets: {companyMetrics('returnOnAssetsTTM')}</div>}
                {props.metrics.data && <div>Return on Capital Employed: {companyMetrics('returnOnCapitalEmployedTTM')}</div>}
                {props.metrics.data && <div>Return on Equity: {companyMetrics('returnOnEquityTTM')}</div>}
                {props.metrics.data && <div>Short Term Coverage Ratio: {companyMetrics('shortTermCoverageRatiosTTM')}</div>}
                {props.metrics.data && <div>Total Debt to Capitalization Ratio: {companyMetrics('totalDebtToCapitalizationTTM')}</div>}
            </div>
        )}
        </>
    )
}

export default CompanyMetrics;