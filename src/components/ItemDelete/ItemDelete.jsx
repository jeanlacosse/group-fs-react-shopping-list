
function ItemDelete({delItem}){
    console.log('it worked');
    return (
        <>
        <button onClick={() => {delItem(item.id)}}>Delete</button>
        </>
    )
}


export default ItemDelete;

