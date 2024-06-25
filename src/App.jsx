import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionHistoryPage from './pages/transactionHistoryPage';
import TransactionDetailPage from './pages/transactionDetailPage';
import ProductListPage from './pages/productList';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/riwayat-transaksi' element={<TransactionHistoryPage />} />
          <Route path='/transaction-detail/:id' element={<TransactionDetailPage />} />
          <Route path='/product-list' element={<ProductListPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
