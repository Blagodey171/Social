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
import Craft from '../content/craft/craft'
import Servers from '../content/servers/servers'



function App(props) {
  return (
    <BrowserRouter>
        <div className={s.newsLive}>
            <div className={s.allComponent}>
                <Header />

                <div className={s.main}>
                    <Navbar navbar={props.navbar} />

                    <div className={s.content}>
                        <Route path="/quest" render={() => <Quest/>}/>
                        <Route path="/skills" render={() => <Skills/>}/>
                        <Route path="/clan" render={() => <Clan/>}/>
                        <Route path="/hero" render={() => <Hero/>}/>
                        <Route path="/imp" render={() => <Imp/>}/>
                        <Route path="/item" render={() => <Item/>}/>
                        <Route path="/location" render={() => <Location/>}/>
                        <Route path="/npc" render={() => <Npc/>}/>
                        <Route path="/pets" render={() => <Pets/>}/>
                        <Route path="/pvp" render={() => <Pvp/>}/>
                        <Route path="/transform" render={() => <Transform/>}/>
                        <Route path="/craft" render={() => <Craft/>}/>
                        <Route path="/servers" render={() => <Servers/>}/>
                        
                    </div>
                </div>

            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
