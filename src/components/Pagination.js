import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, Paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="col-md-10 offset-md-1">
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => Paginate(number)} href="!#" className="page-link">
                                {number}
                            </a>

                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default Pagination