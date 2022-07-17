import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Collections from './views/Collections'
import Cart from './views/Cart'

import AppBar from './components/AppBar';
import Product from './views/Product';
function App() {
  return <>
    <AppBar />
    <Routes>
      <Route exact path="/" element={<Collections />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/collections/:collectionId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </>
}

export default App;
