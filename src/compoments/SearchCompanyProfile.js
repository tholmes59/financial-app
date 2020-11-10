import React from 'react'

const SearchCompanyProfile = (props) => {

    return (
        <div>
             <form onSubmit={props.getCompanyProfile} >
                <input type="text" name="ticker" placeholder="Enter Ticker..."/>
                <button value="Search" type="submit">
                Search
                </button>
            </form>
        </div>
    )
}

export default SearchCompanyProfile;