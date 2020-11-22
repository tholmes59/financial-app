import React from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'

const StockChart = (props) => {
    console.log(props.price.data && props.price.data.historical.map(x => x.close))
    return (
        <div>
            
        </div>
    )
}

export default StockChart;