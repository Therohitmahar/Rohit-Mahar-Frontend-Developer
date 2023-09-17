import React from "react";

export default function Pagination({
  currentPage,
  numberOfPages,
  setCurrentPage,
  numbers,
}) {
  function jumpToPage(page) {
    setCurrentPage(page);
  }
  function handleNextPage() {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  }
  function handlePrevPage() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }
  return (
    <div className="pagination">
      <button className="secondary-btn" onClick={handlePrevPage}>
        Prev
      </button>
      <ul>
        {numbers.map((n, i) => (
          <li
            className={currentPage == n ? "active-page" : ""}
            key={i}
            onClick={() => jumpToPage(n)}
          >
            {n}
          </li>
        ))}
      </ul>
      <button className="secondary-btn" onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
}
