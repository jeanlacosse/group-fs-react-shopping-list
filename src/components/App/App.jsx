import React, {useState} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import ResetList from '../ResetList/ResetList.jsx';


function App() {
    let [shoppingList, setShoppingList] = useState([]);


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
