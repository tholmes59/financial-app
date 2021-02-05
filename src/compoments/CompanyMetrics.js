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
            <div className="valuation-metrics-container">
                <h1>Valuation Metrics</h1>
                    <h3>
                        Profitability Ratios
                    </h3>
                    <table>
                        {props.metrics.data && <tr><td>Gross Profit Margin:</td> <td>{companyMetrics('grossProfitMarginTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Operating Profit Margin:</td> <td>{companyMetrics('operatingProfitMarginTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Pretax Profit Margin:</td> <td>{companyMetrics('pretaxProfitMarginTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Net Profit Margin:</td> <td>{companyMetrics('netProfitMarginTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Return on Assets:</td> <td>{companyMetrics('returnOnAssetsTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Return on Equity:</td> <td>{companyMetrics('returnOnEquityTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Return on Capital Employed:</td> <td>{companyMetrics('returnOnCapitalEmployedTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>EBIT per Revenue:</td> <td>{companyMetrics('ebitPerRevenueTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>EBT per EBIT:</td> <td>{companyMetrics('ebtPerEbitTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Net Income per EBT:</td> <td>{companyMetrics('netIncomePerEBTTTM')}</td></tr>}
                    </table>
                    <h3>
                        Liquidity Ratios
                    </h3>
                    <table>
                        {props.metrics.data && <tr><td>Cash Ratio:</td> <td>{companyMetrics('cashRatioTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Quick Ratio:</td> <td>{companyMetrics('quickRatioTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Current Ratio:</td> <td>{companyMetrics('currentRatioTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Short Term Coverage Ratio:</td> <td>{companyMetrics('shortTermCoverageRatiosTTM')}</td></tr>}
                    </table>
                    <h3>
                        Activity Ratios
                    </h3>
                        {props.metrics.data && <div>Receivables Turnover: {companyMetrics('receivablesTurnoverTTM')}</div>}
                        {props.metrics.data && <div>Days Sales Outstanding: {companyMetrics('daysOfSalesOutstandingTTM')}</div>}
                        {props.metrics.data && <div>Inventory Turnover: {companyMetrics('inventoryTurnoverTTM')}</div>}
                        {props.metrics.data && <div>Fixed Asset Turnover: {companyMetrics('fixedAssetTurnoverTTM')}</div>}
                        {props.metrics.data && <div>Asset Turnover: {companyMetrics('assetTurnoverTTM')}</div>}
                        {props.metrics.data && <div>Operating Cycle: {companyMetrics('operatingCycleTTM')}</div>}
                        {props.metrics.data && <div>Days Inventory Outstanding: {companyMetrics('daysOfInventoryOutstandingTTM')}</div>}
                        {props.metrics.data && <div>Payables Turnover: {companyMetrics('payablesTurnoverTTM')}</div>}
                        {props.metrics.data && <div>Days Payables Outstanding: {companyMetrics('daysOfPayablesOutstandingTTM')}</div>}
                        {props.metrics.data && <div>Cash Conversion Cycle: {companyMetrics('cashConversionCycleTTM')}</div>}
                        {props.metrics.data && <div>Effective Tax Rate: {companyMetrics('effectiveTaxRateTTM')}</div>}
                    <h3>
                        Leverage Ratios
                    </h3>
                        {props.metrics.data && <div>Debt Ratio: {companyMetrics('debtRatioTTM')}</div>}
                        {props.metrics.data && <div>Debt to Equity Ratio: {companyMetrics('debtEquityRatioTTM')}</div>}
                        {props.metrics.data && <div>Interest Coverage Ratio: {companyMetrics('interestCoverageTTM')}</div>}
                        {props.metrics.data && <div>Cap Ex Coverage Ratio: {companyMetrics('capitalExpenditureCoverageRatioTTM')}</div>}
                        {props.metrics.data && <div>Dividend Paid and Capex Coverage Ratio: {companyMetrics('dividendPaidAndCapexCoverageRatioTTM')}</div>}
                        {props.metrics.data && <div>Cash Flow Coverage Ratio: {companyMetrics('cashFlowCoverageRatiosTTM')}</div>}
                        {props.metrics.data && <div>Long Term Debt to Capitalization: {companyMetrics('longTermDebtToCapitalizationTTM')}</div>}
                        {props.metrics.data && <div>Total Debt to Capitalization Ratio: {companyMetrics('totalDebtToCapitalizationTTM')}</div>}
                        {props.metrics.data && <div>Cash Flow to Debt Ratio: {companyMetrics('cashFlowToDebtRatioTTM')}</div>}
                        {props.metrics.data && <div>Company Equity Multiplier: {companyMetrics('companyEquityMultiplierTTM')}</div>}
                    <h3>
                        Market Ratios
                    </h3>
                        {props.metrics.data && <div>P/E Ratio: {companyMetrics('peRatioTTM')}</div>}
                        {props.metrics.data && <div>PEG Ratio: {companyMetrics('pegRatioTTM')}</div>}
                        {props.metrics.data && <div>P/B: {companyMetrics('priceToBookRatioTTM')}</div>}
                        {props.metrics.data && <div>P/S: {companyMetrics('priceToSalesRatioTTM')}</div>}
                        {props.metrics.data && <div>Dividend Yield: {companyMetrics('dividendYieldTTM')}</div>}
                        {props.metrics.data && <div>Dividend Yield %: {companyMetrics('dividendYielPercentageTTM')}</div>}
                        {props.metrics.data && <div>Payout Ratio: {companyMetrics('payoutRatioTTM')}</div>}
                        {props.metrics.data && <div>Cash per Share: {companyMetrics('cashPerShareTTM')}</div>}
                        {props.metrics.data && <div>Free Cash Flow per Share: {companyMetrics('freeCashFlowPerShareTTM')}</div>}
                        {props.metrics.data && <div>Operating Cash Flow per Share: {companyMetrics('operatingCashFlowPerShareTTM')}</div>}
                        {props.metrics.data && <div>Price to Cash Flow Ratio: {companyMetrics('priceCashFlowRatioTTM')}</div>}
                        {props.metrics.data && <div>Price Fair Value: {companyMetrics('priceFairValueTTM')}</div>}
                        {props.metrics.data && <div>Price to Free Cash Flow Ratio: {companyMetrics('priceToFreeCashFlowsRatioTTM')}</div>}
                        {props.metrics.data && <div>Price to Operating Cash Flow Ratio: {companyMetrics('priceToOperatingCashFlowsRatioTTM')}</div>}
                        {props.metrics.data && <div>Free Cash Flow to Operating Cash Flow Ratio: {companyMetrics('freeCashFlowOperatingCashFlowRatioTTM')}</div>}
                        {props.metrics.data && <div>Operating Cash Flow to Sales Ratio: {companyMetrics('operatingCashFlowSalesRatioTTM')}</div>}
                        {props.metrics.data && <div>Enterprise Value Multiple: {companyMetrics('enterpriseValueMultipleTTM')}</div>}
            </div>
        )}
        </>
    )
}

export default CompanyMetrics;