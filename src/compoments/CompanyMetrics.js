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
                    <table>
                        {props.metrics.data && <tr><td>Receivables Turnover:</td> <td>{companyMetrics('receivablesTurnoverTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Days Sales Outstanding:</td> <td>{companyMetrics('daysOfSalesOutstandingTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Inventory Turnover:</td> <td>{companyMetrics('inventoryTurnoverTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Fixed Asset Turnover:</td> <td>{companyMetrics('fixedAssetTurnoverTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Asset Turnover:</td> <td>{companyMetrics('assetTurnoverTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Operating Cycle:</td> <td>{companyMetrics('operatingCycleTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Days Inventory Outstanding:</td> <td>{companyMetrics('daysOfInventoryOutstandingTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Payables Turnover:</td> <td>{companyMetrics('payablesTurnoverTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Days Payables Outstanding:</td> <td>{companyMetrics('daysOfPayablesOutstandingTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Cash Conversion Cycle:</td> <td>{companyMetrics('cashConversionCycleTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Effective Tax Rate:</td> <td>{companyMetrics('effectiveTaxRateTTM')}</td></tr>}
                    </table>
                    <h3>
                        Leverage Ratios
                    </h3>
                    <table>
                        {props.metrics.data && <tr><td>Debt Ratio:</td> <td>{companyMetrics('debtRatioTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Debt to Equity Ratio:</td> <td>{companyMetrics('debtEquityRatioTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Interest Coverage Ratio:</td> <td>{companyMetrics('interestCoverageTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Cap Ex Coverage Ratio:</td> <td>{companyMetrics('capitalExpenditureCoverageRatioTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Dividend Paid and Capex Coverage Ratio:</td> <td>{companyMetrics('dividendPaidAndCapexCoverageRatioTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Cash Flow Coverage Ratio:</td> <td>{companyMetrics('cashFlowCoverageRatiosTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Long Term Debt to Capitalization:</td> <td>{companyMetrics('longTermDebtToCapitalizationTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Total Debt to Capitalization Ratio:</td> <td>{companyMetrics('totalDebtToCapitalizationTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Cash Flow to Debt Ratio:</td> <td>{companyMetrics('cashFlowToDebtRatioTTM')}</td></tr>}
                        {props.metrics.data && <tr><td>Company Equity Multiplier:</td> <td>{companyMetrics('companyEquityMultiplierTTM')}</td></tr>}

                    </table>
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