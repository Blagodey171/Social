import React from 'react';
import Header from '../header/header.jsx'
import style from './App.module.css';
import Navbar from '../navbar/navbar'

function App() {
  return (
    <div className={style.allComponent}>
      <Header />
      <Navbar />
    </div>
    
  );
}

export default App;
