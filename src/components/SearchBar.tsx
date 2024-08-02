import React, { ChangeEvent } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => (
  <div className="mb-3">
    <input
      type="text"
      value={searchTerm}
      onChange={onSearchChange}
      placeholder="Search products"
      className="form-control mb-3"
    />
  </div>
);

export default SearchBar;
