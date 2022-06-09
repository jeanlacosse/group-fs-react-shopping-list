import React, { useState } from 'react';

function ItemForm({
    addItem
}) {

    const [newItem, setNewItem] = useState({})

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addItem(newItem);
        clearInputFields();
    }

    const clearInputFields = () => {
        setNewItem({name: ''});
        setNewItem({quantity: ''});
        setNewItem({unit: ''});
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                onChange={(evt) => setNewItem({name: evt.target.value})}
                type="text"
                placeholder='New Shopping Item' 
                />
            <input
                onChange={(evt) => setNewItem({quantity: evt.target.value})}
                type="text"
                placeholder='Quantity of Item' 
                />
            <input
                onChange={(evt) => setNewItem({unit: evt.target.value})}
                type="text"
                placeholder='Unit of Item' 
                />
            <input type="submit"  value="Save Item"/>
        </form>
    )
}

export default ItemForm;