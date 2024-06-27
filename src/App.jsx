import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionHistoryPage from './pages/transactionHistoryPage';
import TransactionDetailPage from './pages/transactionDetailPage';
import ProductListPage from './pages/productList';
import DetailProductPage from './pages/detailProductPage';
import EditProductPage from './pages/editProductPage';
import AddProductPage from './pages/addProductPage';
import ProductListHome from './pages/ProductListPage';
import OrderPage from './pages/OrderPage';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ProductListHome/>}/>
          <Route path='/order-page' element={<OrderPage/>} />
          <Route path='/riwayat-transaksi' element={<TransactionHistoryPage />} />
          <Route path='/transaction-detail/:id' element={<TransactionDetailPage />} />
          <Route path='/product-list' element={<ProductListPage/>}/>
          <Route path='/detail-product/:id' element={<DetailProductPage/>}/>
          <Route path='/edit-product/:id' element={<EditProductPage />} />
          <Route path='/add-product' element={<AddProductPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
