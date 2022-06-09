
import ItemDelete from "../ItemDelete/ItemDelete"

import ListItems from "../ListItems/ListItems"


function ListContainer({shoppingList, delItem}){
    return(
    <>
    <h2>SHOPPING LIST BELOW</h2>
    <h5>"Pick me up something tasty" - Joey</h5>
    <ul className="listStyle">
        {shoppingList.map(item => (

         
                <ItemDelete item={item} delItem={delItem}/>
            

           <ListItems
           key={item.id}
           item={item}
           />

        ))}
    </ul>
    </>
)}

export default ListContainer