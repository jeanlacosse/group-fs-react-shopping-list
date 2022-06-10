import oscar from "../../oscar.png";

function ItemDelete({ delItem, item }) {
    return (
        <>
            <button onClick={() => delItem(item.id)}><img src={oscar} style={{ width: 30 }} /></button>
        </>
    )
}


export default ItemDelete;
