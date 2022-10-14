import React, { useState } from 'react';
import Players from '../Players/Players';
import './Home.css'

const Home = () => {
    const [search, setSearch] = useState("");
    console.log(search);
    return (
        <div className='home'>
            <div className="player-section">
                <h2>Player Selection</h2>
                <input onChange={(e)=> setSearch(e.target.value)} className='input' type="text" /><button className='search-btn'>Search</button>
                <Players />
            </div>
            <div className="cart-section">
                <h2>Purchase Section</h2>
                <p className='expense'>Total Expense</p>
            </div>
        </div>
    );
};

export default Home;