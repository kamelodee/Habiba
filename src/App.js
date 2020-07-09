import React from 'react';
import Navbar from './components/navigation/Navbar'
import SubNavbar from './components/navigation/SubNavbar'
import Hero from './components/hero/Hero'
import Categories from './components/categories/Categories'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stores from './components/stores/Stores'

import './App.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <SubNavbar/>
      <Hero />
      <Stores/>
    </div>
  );
}

export default App;
