
function ItemDelete({delItem, item}){
    return (
        <>
        <button onClick={()=>delItem(item.id)}>Delete</button>
        </>
    )
}


export default ItemDelete;

