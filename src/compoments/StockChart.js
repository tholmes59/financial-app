import React from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'

const StockChart = (props) => {
    console.log(props.price.data && props.price.data.historical.map(x => x.close))

    const config = {
        title: {
          text: 'My stock chart'
        },
        series: [
          {
            data: props.price.data && (props.price.data.historical.map(x => x.close)).reverse()
          }
        ]
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