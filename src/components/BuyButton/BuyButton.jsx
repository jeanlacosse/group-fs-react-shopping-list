

const BuyButton = ({onPurchase, item}) => {
    const onPurchaseItem = (item) => {
        console.log('In onPurchase')
        onPurchase({id: item})
    }

    return (
        <>
            <button
                onClick={()=> {onPurchaseItem(item.id)}}
            >
                Buy
            </button>
        </>
    )
}

export default BuyButton;