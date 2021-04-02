import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, loading, noPosts }) => {
  const pageNumbers = [];
  const lastPage = Math.ceil(totalPosts / postsPerPage);

  if (loading) {
    return (
      <div></div>
    )
  }
  if (noPosts) {
    return (
      <div></div>
    )
  }

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
      <nav className="pagenate btnSet clear">
        <ul className="paging">
          <li key="first">
            <a onClick={() => paginate(1)} className="board first">
              first
            </a>
          </li>
          <li key="prev" >
            <a onClick={() => paginate(currentPage-1)} className="board prev">
              Prev
            </a>
          </li>
          {pageNumbers.map(number => (
            <li key={number} >
              <a  onClick={ ()=> paginate(number) } className={number === currentPage ? "current" : ""}>
                {number}
              </a>
            </li>
          ))}
          
          <li>
            <a onClick={() => paginate(currentPage+1)} className="board next">next</a>
          </li>
          <li>
            <a  onClick={() => paginate(lastPage)}  className="board last">last</a>
          </li>
        </ul>
      </nav>
    )
}

export default Pagination
