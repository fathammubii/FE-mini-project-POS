import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionHistoryPage from './pages/transactionHistoryPage';
import TransactionDetailPage from './pages/transactionDetailPage';
import ProductListPage from './pages/productList';
import DetailProductPage from './pages/detailProductPage';
import EditProductPage from './pages/editProductPage';
import AddProductPage from './pages/addProductPage';
import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
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
