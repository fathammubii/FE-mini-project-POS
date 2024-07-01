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
import LeftNavbar from './layout/leftNavbar';
import Header from './layout/header';
import CategoryListPage from './pages/CategoryList';
import AddCategoryPage from './pages/addCategoryPage';
import DetailCategoryPage from './pages/detailProductPage copy';

function App() {

  return (
    <div>

      <Router>
        <Header/>
        <LeftNavbar />
        <div className='ml-16 mt-8'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/riwayat-transaksi' element={<TransactionHistoryPage />} />
            <Route path='/transaction-detail/:id' element={<TransactionDetailPage />} />
            <Route path='/product-list' element={<ProductListPage />} />
            <Route path='/detail-product/:id' element={<DetailProductPage />} />
            <Route path='/edit-product/:id' element={<EditProductPage />} />
            <Route path='/add-product' element={<AddProductPage />} />
            <Route path='/category-list' element={<CategoryListPage/>} />
            <Route path='/add-category' element={<AddCategoryPage/>} />
            <Route path='/detail-category/:id' element={<DetailCategoryPage/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
