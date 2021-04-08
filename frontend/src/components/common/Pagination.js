import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, loading, noPosts }) => {
  const pageNumbers = [];
  const lastPage = Math.ceil(totalPosts / postsPerPage);
  // // //console.log(currentPage);
  // var theFirst,theEnd;
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i);
}
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

  if (currentPage === 1 && currentPage === lastPage) {
    return (
      <nav className="pagenate btnSet clear">
        <ul className="paging">
          {pageNumbers.map(number => (
            <li key={number} >
              <a  onClick={ ()=> paginate(number) } className={number === currentPage ? "current" : ""}>
                {number}
              </a>
            </li>
          ))}
        </ul>
        </nav>
    )
  }

  if (currentPage === lastPage) {
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
        </ul>
      </nav>
    )
  }
  if (currentPage === 1) {
    return (
      <nav className="pagenate btnSet clear">
        <ul className="paging">
          {pageNumbers.map(number => (
            <li key={number} >
              <a  onClick={ ()=> paginate(number) } className={number === currentPage ? "current" : ""}>
                {number}
              </a>
            </li>
          ))}
          <li>
          <a onClick={() => paginate(currentPage+1)} className="board next" id="nextPage">next</a>
        </li>
        <li>
          <a  onClick={() => paginate(lastPage)}  className="board last"  id="lastPage">last</a>
        </li>
        </ul>
      </nav>
    )
  }
  else {
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
          <a onClick={() => paginate(currentPage+1)} className="board next" id="nextPage">next</a>
        </li>
        <li>
          <a  onClick={() => paginate(lastPage)}  className="board last"  id="lastPage">last</a>
        </li>
        </ul>
      </nav>
    )
}
    
    
}

export default Pagination
