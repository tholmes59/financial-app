import React from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'

const StockChart = (props) => {
    console.log(props.price.data && props.price.data)
    console.log(props.price.data && props.price.data.historical.map(x => x.close))

    let dataArray = []
   
    let stockData = props.price.data && props.price.data.historical
    
    console.log(stockData)
    if(stockData){
        stockData.reverse()
        for(let i=0; i<stockData.length; i++){
            let tempArray = []
            tempArray.push(new Date(stockData[i].date).getTime(), stockData[i].close)
            dataArray.push(tempArray)
            tempArray = []
        }
    }

    console.log(dataArray)

    const config = {
        title: {
          text: 'Chart'
        },
        series: [
          {
            data: dataArray
          }
        ],
        rangeSelector: {
            buttons: [{
              type: 'day',
              count: 7,
              text: '7d',
            }, {
              type: 'month',
              count: 1,
              text: '1m'
            }, {
              type: 'month',
              count: 3,
              text: '3m'
            }, {
              type: 'ytd',
              text: 'YTD'
            }, {
                type: 'year',
                count: 1,
                text: '1yr'
              },
              {
              type: 'all',
              text: 'All'
            }],
            selected: 5
          },
      };

    return (
        <div>
            {props.price.data && 
                <ReactHighcharts config = {config}></ReactHighcharts>
            }
        </div>
    )
}

export default StockChart;