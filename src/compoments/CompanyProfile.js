import React from 'react'


const CompanyProfile = props => {
console.log(props)

let marketCap;
if (
  (props.company.data && props.company.data.map((x) => x.mktCap)) < 1000000000
) {
  marketCap =
    (
      (props.company.data && props.company.data.map((x) => x.mktCap)) / 1000000
    ).toFixed(2) + "M";
}
if (
  (props.company.data && props.company.data.map((x) => x.mktCap)) <
  1000000000000
) {
  marketCap =
    (
      (props.company.data && props.company.data.map((x) => x.mktCap)) /
      1000000000
    ).toFixed(2) + "B";
} else {
  marketCap =
    (
      (props.company.data && props.company.data.map((x) => x.mktCap)) /
      1000000000000
    ).toFixed(3) + "T";
}
console.log(marketCap);

let price = props.company.data && (props.company.data.map(x =>x.price).shift()).toFixed(2)*1
let priceChange = props.company.data && (props.company.data.map(x =>x.changes).shift()).toFixed(2)*1
let percentChange = ((((price + priceChange) / price) -1 )*100).toFixed(2) + '%'
// let percentChange = (((price + priceChange) / price) - 1) 
console.log(price)
console.log(priceChange)
console.log(price + priceChange)
let pricePercentageFontColor = ''
if(priceChange > 0){
    pricePercentageFontColor = {color: "green"}
} 
if(priceChange < 0){
    pricePercentageFontColor = {color: "red"}
}
console.log(percentChange)   

const fiftyTwoWeek = (val) => {
  let temp = val[0].split('-')
  let low = Number(temp[0]).toFixed(2)
  let high = Number(temp[1]).toFixed(2)
  return `${low} - ${high}`
}

    return (
        <div>
          <div className="full-name-container">
            {props.company.data && <a href={props.company.data.map(x => x.website)} target="_blank" rel="noopener noreferrer"><img alt="CompanyLogo" src={props.company.data.map(x => x.image)}></img></a>}
            <div className="name-container">
              {props.company.data && props.company.data.map(x => <div>{x.companyName} ({x.symbol})</div>)}
              {props.company.data && props.company.data.map(x => <div>{x.exchangeShortName} - {x.exchange} Currency in {x.currency}</div>)}
            </div>
          </div>
            {props.company.data && <div><span className="stock-price">{price}</span> {<span style={pricePercentageFontColor}>{priceChange}</span>} {<span style={pricePercentageFontColor}>({percentChange})</span>}</div>}
            <div className="address">
              {props.company.data && props.company.data.map(x => <div>{x.address}</div>)}
              {props.company.data && props.company.data.map(x => <div>{x.city}, {x.state} {x.zip}</div>)}
              {props.company.data && props.company.data.map(x => <div>{x.ceo}</div>)}
            </div>
            {props.company.data && <div>Market Cap: {marketCap}</div>}
            {props.company.data && <div>52 Week Range: {fiftyTwoWeek(props.company.data && props.company.data.map(x => x.range))}</div>}
            <div className="company-description">
              {props.company.data && props.company.data.map(x => <div>{x.description}</div>)}
            </div>
        </div>
    )
}

export default CompanyProfile;