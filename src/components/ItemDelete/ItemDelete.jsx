function ItemDelete({}){
    return (
        <>
        <button onClick={() => {ItemDelete(item.id)}}>Clear</button>
        </>
    )
}


export default ItemDelete;

