import React from 'react'

const SearchTicker = (props) => {


    return (
        <div>
            <form onSubmit={props.getTicker}>
                <input type="text" name="symbol" placeholder="Enter Compamy Name..."/>
                <button value="Search" type="submit">
                Search
                </button>

            </form>
        </div>
    )
}

export default SearchTicker;