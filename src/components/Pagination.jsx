import React from 'react';

const Pagination = ({ paginate, totalPages, nextPage, previousPage, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="footer">
            <ul className='pagination justify-content-center'>
                <li className='page-item '>
                    <button onClick={() => paginate(currentPage - 20)} className='page-link' disabled={previousPage === null}>
                    <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {pageNumbers.map(number => (
                <li key={number} className='page-item '>
                    <button onClick={() => paginate(number)} className='page-link'>
                    {number}
                    </button>
                </li>
                ))}
                <li className='page-item '>
                    <button onClick={() => paginate(currentPage + 20)} className='page-link' disabled={nextPage === null}>
                    <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;