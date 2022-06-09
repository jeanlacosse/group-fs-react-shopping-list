
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.jsx';
import ResetList from '../ResetList/ResetList.jsx';
import ItemDelete from '../ItemDelete/ItemDelete.jsx';

function App() {

//feature/item-form-post
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

    const delItem = (item) => {
        console.log('itemDelete', item);

        axios.delete(`/items/${ItemDelete}`)
        .then(response => {
        
        getItems();
        })
        .catch(err => {
            alert('Error deleting Item');
            console.log(err);
        })
    }
 

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            {/* <ItemForm  addItem={addItem}/>  */}
            <ItemDelete />
            </main>
        </div>
    );
}

export default App;
