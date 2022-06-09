

const BuyButton = ({onPurchase}) => {
    const onPurchaseItem = () => {
        console.log('In onPurchase')
        onPurchase({id: 5})
    }

    return (
        <>
            <button
                onClick={onPurchaseItem}
            >
                Buy
            </button>
        </>
    )
}

export default BuyButton