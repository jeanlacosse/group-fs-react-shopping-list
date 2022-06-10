
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.jsx';
import ResetList from '../ResetList/ResetList.jsx';
import ItemDelete from '../ItemDelete/ItemDelete.jsx';
import ClearAll from '../ItemDelete/ClearAll.jsx';

import ListContainer from '../ListContainer/ListContainer.jsx';

function App() {

    //feature/item-form-post
    let [shoppingList, setShoppingList] = useState([]);

    const addItem = (itemToAdd) => {
        console.log('item to post', itemToAdd)
        axios.post('/list', itemToAdd)
            .then(() => {
                // here I rerun the axios.GET
                getItems()
            })
            .catch(err => {
                alert('error adding item')
                console.log('err is', err)
            })
    }


    const resetList = () => {
        axios.put('/list')
            .then(() => {
                console.log('Reset Complete')
                getItems();
            })
            .catch((err) => {
                console.log('Reset did not work')
            })
    }

    const onPurchaseItem = (itemId) => {
        console.log('in on Purchase', itemId.id)
        axios.put(`/list/${itemId.id}`)
            .then(() => {
                console.log('Purchase success')
                getItems();
            })
            .catch((err) => {
                console.log('Purchase failed', err)
            })
    }




    useEffect(() => {
        getItems()
    }, [])


    const getItems = () => {
        axios.get("/list")
            .then((response) => {
                //The information we want is in the data
                // we are getting back a huge object but
                // we just want to get the .data of it
                setShoppingList(response.data)
                //console.log('THIS IS THE GET', response)
            })
            .catch((err) => {
                alert('ERR in the GET');
                console.log(err);
            })
    }


    const delItem = (item) => {
        console.log('itemDelete', item);

        axios.delete(`/list/${item}`)
            .then(response => {

                getItems();
            })
            .catch(err => {
                alert('Error deleting Item');
                console.log(err);
            })
    }

    const delAll = () => {
        console.log('clear all');

        axios.delete(`/list`)
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


                <ItemForm addItem={addItem} />
                <p></p>
                <ResetList resetList={resetList} />
                <ClearAll delAll={delAll} />
                <ListContainer
                    shoppingList={shoppingList}
                    onPurchaseItem={onPurchaseItem}
                    delItem={delItem}
                />






            </main>
        </div>
    );
}

export default App;
