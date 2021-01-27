import React from 'react'

const SearchTicker = (props) => {


    return (
        <div>
            <form onSubmit={props.getTicker} className="search-form">
                <input type="text" name="symbol" placeholder="Enter Company Name..." />
                <button value="Search Ticker" type="submit">
                    <i class="fa fa-search"></i>
                </button>

            </form>
        </div>
    )
}

export default SearchTicker;