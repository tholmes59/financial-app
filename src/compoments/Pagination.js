import React, { useState } from 'react';

const Pagination = ({ storiesPerPage, totalStories, paginate, currentPage }) => {

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
                <li key={number} className={`page-item${ currentPage === number ? ' active' : ''}`}>
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