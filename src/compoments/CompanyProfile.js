import React from 'react'


const CompanyProfile = props => {
console.log(props)

let marketCap;
    if((props.company.data && props.company.data.map(x => x.mktCap)) < 1000000000){
        marketCap = ((props.company.data && props.company.data.map(x => x.mktCap))/1000000).toFixed(2) + 'M'
    }
    if((props.company.data && props.company.data.map(x => x.mktCap)) < 1000000000000){
        marketCap = ((props.company.data && props.company.data.map(x => x.mktCap))/1000000000).toFixed(2) + 'B'
    }
    else {
        marketCap = ((props.company.data && props.company.data.map(x => x.mktCap))/1000000000000).toFixed(3) + 'T'
    }
    console.log(marketCap)
    
    return (
        <div>
            {props.company.data && <img alt="CompanyLogo" src={props.company.data.map(x => x.image)}></img>}
            {props.company.data && props.company.data.map(x => <p>{x.companyName} ({x.symbol})</p>)}
            {props.company.data && props.company.data.map(x => <p>{x.price} {x.changes}</p>)}
            {props.company.data && props.company.data.map(x => <p>{x.address}</p>)}
            {props.company.data && props.company.data.map(x => <p>{x.city}, {x.state} {x.zip}</p>)}
            {props.company.data && props.company.data.map(x => <p>{x.ceo}</p>)}
            {props.company.data && <p>Market Cap: {marketCap}</p>}
        </div>
    )
}

export default CompanyProfile;