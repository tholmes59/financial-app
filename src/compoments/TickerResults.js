import React from 'react'

const TickerResults = (props) => {
    console.log(props)
    
    // const [viewTickers, setViewTickers] = useState(true)
    let handleClick = e => {
        e.preventDefault()
        props.getTickerResults(e)
        // document.getElementById('tickerResults').innerHTML = ''
        // document.getElementById('tickerResults').remove()
        // props.setViewTickers(!viewTickers)
        // console.log(viewTickers)
        // resetView()
       
    }

    if (props.ticker.error){
        return(
            <div id="tickerResults">
            {props.ticker.error && <div onClick={props.closeWindow} className="close-ticker-results">x</div>}
            {props.ticker.error && <p>{props.ticker.error}</p>}
        </div>
        )
    }
  
    return (
        <>
        {/* {viewTickers && 
        <div id="tickerResults">
            {props.ticker.data && props.ticker.data.map(x => <p name="ticker" onClick={handleClick}>{x.symbol} | {x.name}</p>)}
        </div>
        } */}
        {props.ticker.data && 
         <div id="tickerResults">
            {props.ticker.data && <div onClick={props.closeWindow} className="close-ticker-results">x</div>}
            {props.ticker.data && props.ticker.data.map(x => <div name="ticker" className="ticker-search-results" onClick={handleClick}>{x.symbol}  {x.name}  {x.exchangeShortName}</div>)}
            {props.ticker.error && <p>{props.ticker.error}</p>}
        </div>
        }
        </>
    )
}

export default TickerResults;