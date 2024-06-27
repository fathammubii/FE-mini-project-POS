import React, { useEffect, useState } from "react";
import TableProductList from "../components/tableProductList";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/pos/api/listproduct');
        setProducts(response.data);
      } catch (error) {
        console.log('Error fetching products: ', error);
      }
    };
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDeleteProduct = (productId) => {
    setProductToDelete(productId);
    setShowDeleteConfirmation(true);
  };

  const confirmDeleteProduct = async () => {
    try {
      await axios.post(`http://localhost:8080/pos/api/deleteproduct/${productToDelete}`);
      setProducts(products.filter(product => product.productId !== productToDelete));
      setShowDeleteConfirmation(false);
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
    }
  };

  return (
    <div className="text-left">
      <div className='flex'>
        <h1 className='flex-none text-left'>Daftar Produk</h1>
        <div className='grow'></div>
        <div>
          <button><Link to={`/add-product`}>+ Tambah Produk</Link></button>
        </div>
      </div>
      <div>
        <TableProductList
          products={currentProducts}
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
          onDelete={handleDeleteProduct}
        />
      </div>

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirmation && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen px-4 text-center'>
            <div className='fixed inset-0 bg-black opacity-50'></div>
            <div className='relative z-10 bg-white p-6 rounded-lg'>
              <h2 className='mb-4'>Delete Product</h2>
              <p className='mb-4'>Are you sure you want to delete this product?</p>
              <div className='flex justify-center space-x-4'>
                <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded' onClick={confirmDeleteProduct}>
                  Delete
                </button>
                <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded' onClick={() => setShowDeleteConfirmation(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default ProductListPage;
