import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productsSlice';
import ProductCard from './ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // default ascending
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProducts({ sortBy, sortOrder }));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [dispatch, sortBy, sortOrder]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    const sortByValue = event.target.value;
    setSortBy(sortByValue);
    setSorting(true);
  };

  const handleOrderChange = (event) => {
    const sortOrderValue = event.target.value;
    setSortOrder(sortOrderValue);
    setSorting(true);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Default sort by id if no sorting is applied
  let sortedProducts = sorting ? [...filteredProducts] : [...products];

  // Apply sorting by title or price
  if (sortBy === 'title') {
    sortedProducts.sort((a, b) => {
      const compareValue = a.title.localeCompare(b.title);
      return sortOrder === 'asc' ? compareValue : -compareValue;
    });
  } else if (sortBy === 'price') {
    sortedProducts.sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
  }

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error fetching products</p>;
  }

  return (
    <div>
      <div className="flex mb-4">
        <label className="mr-2">Sort by:</label>
        <select value={sortBy} onChange={handleSortChange} className="border p-2 mr-2">
          <option value="">Default</option>
          <option value="title">Title</option>
          <option value="price">Price</option>
        </select>
        <select value={sortOrder} onChange={handleOrderChange} className="border p-2">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border p-2 mb-4"
      />
      <div className="grid grid-cols-3 gap-4">
        {sortedProducts.map(product => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
