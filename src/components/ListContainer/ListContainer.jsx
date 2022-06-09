
function ListContainer({shoppingList}){
    return(
    <>
    <h2>SHOPPING LIST BELOW</h2>
    <h3>"Pick me up something tasty" - Joey</h3>
    <ul>
        {shoppingList.map(item => (
            <li key={item.id}>
                {item.name} {item.quantity} {item.unit}
            </li>
        ))}
    </ul>
    </>
)}

export default ListContainer