import React from 'react'


const CompanyProfile = props => {
console.log(props)

    return (
        <div>
            Test Company Data
           {props.company.data && <img src={`https://logo.clearbit.com/${props.company.data.map(x => x.website)}`}></img>}
        </div>
    )
}

export default CompanyProfile;