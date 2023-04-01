import React, { useState } from "react";

function PaginationClassic({ setPageNumber, pageNumber, allCategories }) {
  const [firstNumber, setFirstNumber] = useState(1);
  let secondNumber = null;
  if (allCategories.length && secondNumber === null) {
    secondNumber = allCategories.length;
  }

  const handlePrevious = () => {
    if (pageNumber !== 1) {
      setPageNumber((prev) => prev - 1);
      setFirstNumber((prev) => prev - 10);
      secondNumber = secondNumber - 10;
    }
  };

  const handleNext = () => {
    setPageNumber((prev) => prev + 1);
    setFirstNumber((prev) => prev + 10);
    secondNumber = secondNumber + 10;
  };
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav
        className="mb-4 sm:mb-0 sm:order-1"
        role="navigation"
        aria-label="Navigation"
      >
        <ul className="flex justify-center">
          <button className="ml-3 first:ml-0" onClick={handlePrevious}>
            <span
              className={`btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500 ${
                pageNumber === 1 && "cursor-not-allowed text-slate-300 "
              }`}
            >
              &lt;- Previous
            </span>
          </button>
          <button
            className="ml-3 first:ml-0"
            onClick={handleNext}
            disabled={allCategories.length < 10 || allCategories.length === 9}
          >
            <span
              className={`btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500 ${
                allCategories.length < 10 || allCategories.length === 9
                  ? "cursor-not-allowed text-slate-300"
                  : ""
              }`}
            >
              Next -&gt;
            </span>
          </button>
        </ul>
      </nav>
      <div className="text-sm text-slate-500 text-center sm:text-left">
        Showing{" "}
        <span className="font-medium text-slate-600">{firstNumber}</span> to{" "}
        <span className="font-medium text-slate-600">{secondNumber}</span> of{" "}
        <span className="font-medium text-slate-600"></span> results
      </div>
    </div>
  );
}

export default PaginationClassic;
