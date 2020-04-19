import React from 'react';
import Header from '../header/header.jsx'
import s from './App.module.css';
import Navbar from '../navbar/navbar'
import Quest from '../content/quest/quest'
import Skills from '../content/skills/skills'
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
        <div className={s.newsLive}>
            <div className={s.allComponent}>
                <Header />

                <div className={s.main}>
                    <Navbar />

                    <div className={s.content}>
                        <Route path="/quest" component={Quest}/>
                        <Route path="/skills" component={Skills}/>
                        
                    </div>
                </div>

            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
