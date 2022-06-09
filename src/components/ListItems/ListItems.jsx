import ItemDelete from "../ItemDelete/ItemDelete";
//need to deconstruct it OTHERWISE it would have been 
// item.item.name but with the curly brackets aka deconstructing
// it makes it so you only have to dig down once
function ListItems({item, delItem}){
    return(
    <li>
        {item.name}<br></br> {item.quantity} {item.unit}
        <ItemDelete delItem={delItem} item={item}/>
    </li>
    )
}

export default ListItems;