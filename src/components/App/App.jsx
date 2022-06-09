import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

let [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        getItems()
    },[])
    const getItems = () => {
        axios.get("/list")
        .then((response) => {
            console.log('THIS IS THE GET', response)
        })
        .catch((err) => {
            alert('ERR in the GET');
            console.log(err);
        })
    }    
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
