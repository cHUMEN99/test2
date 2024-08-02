import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './products.module.css';
import Product from '../models/Product';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(10);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = products;
    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(product => product.category === selectedCategory);
    }
    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(updatedProducts);
  }, [products, selectedCategory, searchTerm]);

  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <Link to="/login">
        <button className="btn btn-primary mb-3">До реєстрації</button>
      </Link>

      <h2>Products</h2>

      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <CategoryFilter selectedCategory={selectedCategory} uniqueCategories={uniqueCategories} onCategoryChange={(e) => setSelectedCategory(e.target.value || null)} />
      <ProductList products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalProducts={filteredProducts.length}
        productsPerPage={productsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;
