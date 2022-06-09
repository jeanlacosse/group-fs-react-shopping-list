import ItemDelete from "../ItemDelete/ItemDelete"

function ListContainer({shoppingList, delItem}){
    return(
    <>
    <h2>SHOPPING LIST BELOW</h2>
    <h3>"Pick me up something tasty" - Joey</h3>
    <ul>
        {shoppingList.map(item => (
            <li key={item.id}>
                {item.name} {item.quantity} {item.unit}
                <ItemDelete item={item} delItem={delItem}/>
            </li>
        ))}
    </ul>
    </>
)}

export default ListContainer