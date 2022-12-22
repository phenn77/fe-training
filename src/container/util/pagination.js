import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  const generalClass = "px-3 py-2 leading-tight border";

  const activeClass =
    generalClass +
    " z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
  const nonActiveClass =
    generalClass +
    " px-3 text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const previousClass = nonActiveClass + " rounded-l-2xl";
  const nextClass = nonActiveClass + " rounded-r-2xl";

  const totalPage = props.totalPage ? parseInt(props.totalPage) : 1;

  return (
    <div className="relative bottom-6">
      <nav className="m-auto left-0 right-0 text-center">
        <ReactPaginate
          className="inline-flex -space-x-px"
          nextClassName={nextClass}
          previousClassName={previousClass}
          pageClassName={nonActiveClass}
          activeClassName={activeClass}
          breakClassName={nonActiveClass}
          breakLabel="..."
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          nextLabel="Next"
          previousLabel="Prev"
          pageCount={totalPage}
        />
      </nav>
    </div>
  );
};

export default Pagination;
