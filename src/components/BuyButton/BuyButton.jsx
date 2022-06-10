import handbasket from "../../handbasket.png";

const BuyButton = ({ onPurchase, item }) => {
    const onPurchaseItem = (item) => {
        console.log('In onPurchase')
        onPurchase({ id: item })
    }

    return (
        <>
            <button
                onClick={() => { onPurchaseItem(item.id) }}
            >
                <img src={handbasket} style={{ width: 30 }} />
            </button>
        </>
    )
}

export default BuyButton;