import React from 'react';

const Pagination = ({ storiesPerPage, totalStories, paginate }) => {

    console.log(storiesPerPage)
    console.log(totalStories)

    // let allStoriesNumber = totalStories && totalStories.length

    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalStories/ storiesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-nav-container">
            <ul>
                {pageNumbers.map(number => (
                <li key={number}>
                    <button onClick={() => paginate(number)} >
                    {number}
                    </button>
                </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;