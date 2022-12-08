import React from 'react';
import  {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import AppCss from './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/categoria/:id" element={<ItemListContainer />} />
      <Route path="/producto/:id" element={<ItemDetailContainer />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;