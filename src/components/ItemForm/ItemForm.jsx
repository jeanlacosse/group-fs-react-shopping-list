import React, { useState } from 'react';

function ItemForm({
    addItem
}) {

    // need a seperate state value for each input
    const [newName, setNewName] = useState({})
    const [newQty, setNewQty] = useState({})
    const [newUnit, setNewUnit] = useState({})

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // each input state passed into an object that gets sent over
        addItem({
            name: newName,
            quantity: newQty,
            unit: newUnit
        });

        clearInputFields();
    }

    const clearInputFields = () => {
        setNewName('');
        setNewQty('');
        setNewUnit('');
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                onChange={(evt) => setNewName(evt.target.value)}
                type="text"
                placeholder='New Shopping Item' 
                />
            <input
                onChange={(evt) => setNewQty(evt.target.value)}
                type="text"
                placeholder='Quantity of Item' 
                />
            <input
                onChange={(evt) => setNewUnit(evt.target.value)}
                type="text"
                placeholder='Unit of Item' 
                />
            <input type="submit"  value="Save Item"/>
        </form>
    )
}

export default ItemForm;