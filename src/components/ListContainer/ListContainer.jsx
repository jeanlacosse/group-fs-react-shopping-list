
import BuyButton from "../BuyButton/BuyButton"

function ListContainer({shoppingList, onPurchaseItem}){

import ListItems from "../ListItems/ListItems"

function ListContainer({shoppingList, delItem}){

    return(
    <>
    <h2>SHOPPING LIST BELOW</h2>
    <h5>"Pick me up something tasty" - Joey</h5>
    <ul className="listStyle">
        {shoppingList.map(item => (

           <ListItems
           key={item.id}
           item={item}
           delItem={delItem}
           />

        ))}
    </ul>
    </>
)}

export default ListContainer