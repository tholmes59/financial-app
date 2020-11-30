import React from 'react'


const CompanyProfile = props => {
console.log(props)
    
    return (
        <div>
            {props.company.data && <img src={props.company.data.map(x => x.image)}></img>}
           
           
        </div>
    )
}

export default CompanyProfile;