import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../models/Product';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </li>
    ))}
  </ul>
);

export default ProductList;
