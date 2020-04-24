import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import s from './App.module.css';

import Header from '../header/header.jsx'
import Navbar from '../navbar/navbar'
import Quest from '../content/quest/quest'
import Skills from '../content/skills/skills'
import Clan from '../content/clan_alliance/clan'
import Hero from '../content/hero_oli_subclass/hero'
import Imp from '../content/improvement/imp'
import Item from '../content/item/item'
import Location from '../content/location/location'
import Npc from '../content/npc_monster/npc'
import Pets from '../content/pets_summon/pets'
import Pvp from '../content/pvp_siege/pvp'
import Transform from '../content/transform/transform'



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
                        <Route path="/clan" component={Clan}/>
                        <Route path="/hero" component={Hero}/>
                        <Route path="/imp" component={Imp}/>
                        <Route path="/item" component={Item}/>
                        <Route path="/location" component={Location}/>
                        <Route path="/npc" component={Npc}/>
                        <Route path="/pets" component={Pets}/>
                        <Route path="/pvp" component={Pvp}/>
                        <Route path="/transform" component={Transform}/>
                        
                    </div>
                </div>

            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
