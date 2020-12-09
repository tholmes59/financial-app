import React from 'react'


const CompanyProfile = props => {
console.log(props)
    
    return (
        <div>
            {props.company.data && <img alt="CompanyLogo" src={props.company.data.map(x => x.image)}></img>}
            {props.company.data && props.company.data.map(x => <p>{x.companyName}</p>)}
            {props.company.data && props.company.data.map(x => <p>{x.address}</p>)}
            {props.company.data && props.company.data.map(x => <p>{x.city}, {x.state} {x.zip}</p>)}
            {props.company.data && props.company.data.map(x => <p>{x.ceo}</p>)}
        </div>
    )
}

export default CompanyProfile;