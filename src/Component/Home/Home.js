import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css'

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res=>res.json())
        .then(data=>setPlayers(data?.player))
    },[search])
    console.log(players);
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