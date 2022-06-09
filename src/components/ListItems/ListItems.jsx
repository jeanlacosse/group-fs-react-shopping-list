import ItemDelete from "../ItemDelete/ItemDelete";
import BuyButton from "../BuyButton/BuyButton";
//need to deconstruct it OTHERWISE it would have been 
// item.item.name but with the curly brackets aka deconstructing
// it makes it so you only have to dig down once
function ListItems({item, delItem, onPurchase}){
    return(
    <li>
        {item.name}<br></br> {item.quantity} {item.unit}<br></br>
        {item.purchased ? <>Purchased</> : 
        <>
        <ItemDelete delItem={delItem} item={item}/>
        <BuyButton onPurchase={onPurchase} item={item}/>
        </>
        }
     

    </li>
    )
}

export default ListItems;