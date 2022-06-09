import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.jsx';

function App() {

    let [shoppingList, setShoppingList] = useState([]);

    const addItem = (itemToAdd) => {
        axios.post('/list', itemToAdd)
        .then(response => {
            // here I rerun the axios.GET
        })
        .catch(err => {
            alert('error adding item')
            console.log('err is', err)
        })
    }
    

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            <ItemForm  addItem={addItem}/> 
            
            </main>
        </div>
    );
}

export default App;
