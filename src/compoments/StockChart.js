import React from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import moment from 'moment'

const StockChart = (props) => {
    console.log(props.price.data && props.price.data)
    console.log(props.price.data && props.price.data.symbol)
    console.log(props.price.data && props.price.data.historical.map(x => x.close))

    let chartName = props.price.data && props.price.data.symbol
    let dataArray = []
   
    let stockData = props.price.data && props.price.data.historical.sort(function compare(a,b){
        let dateA = new Date(a.date)
        let dateB = new Date(b.date)
        return dateA - dateB
    })
    
    console.log(stockData)
    // if(stockData) {
    //     var sortedStockData = stockData.sort(function compare(a,b){
    //         let dateA = new Date(a.date)
    //         let dateB = new Date(b.date)
    //         return dateA - dateB
    //     })

    // }
    // console.log(sortedStockData)
    if(stockData){
        for(let i=0; i<stockData.length; i++){
            let tempArray = []
            tempArray.push(new Date(stockData[i].date).getTime(), stockData[i].close)
            dataArray.push(tempArray)
            tempArray = []
        }
    }

    console.log(dataArray)

    const options = {style: 'currency', currency: 'USD'};
    const numberFormat = new Intl.NumberFormat('en-US', options);

    const config = {
        title: {
          text: chartName + ' Chart'
        },
        series: [
          {
            data: dataArray
          }
        ],
        tooltip: {
          shared: true,
          formatter: function(){
            return 'Price <b>' + numberFormat.format(this.y) + '</b> on <b>' + moment(this.x).format('MMMM Do YYYY') + '</b>'
          }
        },
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