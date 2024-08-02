import React from 'react';

interface CategoryFilterProps {
  selectedCategory: string | null;
  uniqueCategories: string[];
  onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, uniqueCategories, onCategoryChange }) => (
  <div className="mb-3">
    <select
      className="form-select"
      value={selectedCategory || ''}
      onChange={onCategoryChange}
    >
      <option value="">All Categories</option>
      {uniqueCategories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

export default CategoryFilter;
