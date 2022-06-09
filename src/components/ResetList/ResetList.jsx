const ResetList = ({resetList}) => {
    const onResetPurchased = () => {
        resetList();
        console.log('in onResetPurchased')
    }

    return (
        <>
            <button
                onClick={onResetPurchased}
            >
                Reset
            </button>
        </>
    )
}

export default ResetList