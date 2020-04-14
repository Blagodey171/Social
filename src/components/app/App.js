import React from 'react';
import Header from '../header/header.jsx'
import s from './App.module.css';
import Navbar from '../navbar/navbar'
import Quest from '../quest/quest'
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className={s.allComponent}>
        <Header />
        <div className={s.main}>
          <Navbar />
          <div className={s.content}>
            <Quest h1='Quest' />
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
