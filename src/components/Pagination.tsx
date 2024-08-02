import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalProducts: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalProducts, productsPerPage, onPageChange }) => {
  const indexOfLastProduct = currentPage * productsPerPage;
  const hasNextPage = indexOfLastProduct < totalProducts;
  const hasPrevPage = currentPage > 1;

  return (
    <div className="pagination">
      <button
        className="btn btn-secondary me-2"
        disabled={!hasPrevPage}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        className="btn btn-secondary ms-2"
        disabled={!hasNextPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
