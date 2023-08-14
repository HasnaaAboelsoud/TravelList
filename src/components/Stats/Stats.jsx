function Stats({items}) {
    if(!items.length){
        return <footer className="stats py-4 text-center h4">
            <p className="mt-1 fw-bold">
                <em>Start adding some items to your packing list 🚀</em>
            </p>
        </footer>
    }
    const numItems= items.length;
    const numPacked= items.filter((item)=> item.packed).length;
    const percentage= Math.round((numPacked / numItems) * 100);
    return (
        <>
            <div className="stats py-4 text-center h4">
                <p className="mt-1 fw-bold">
                    <em>{percentage === 100?"You got everything! Ready to go ✈️":`💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage} %)`}</em>
                </p>
            </div>
        </>
    )
}

export default Stats
