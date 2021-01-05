import React from 'react'

const SearchCompanyProfile = (props) => {

    return (
        <div>
             <form onSubmit={props.getCompanyProfile} className="search-form">
                <input type="text" name="ticker" placeholder="Enter Ticker..." />
                <button value="Search Company" type="submit">
                    <i class="fa fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default SearchCompanyProfile;