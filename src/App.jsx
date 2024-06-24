import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RiwayatTransasksi from './pages/riwayatTransaksi';

function App() {

  return (
    <div>
      <RiwayatTransasksi/>
      {/* <Routes>
        <Route path="/riwayat-transaksi" element={<RiwayatTransasksi/>}></Route>
      </Routes> */}
    </div>
  )
}

export default App
