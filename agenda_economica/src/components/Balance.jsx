import { useGlobalState } from "../context/GlobalState"

function Balance() {
    const { transaction } = useGlobalState();
    const amounts = transaction.map( transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item),0)
    return (
        <div className="flex justify-between">
            <h3>Your Balance</h3>
            <h1 className="text-2xl font-bold">$ {total}</h1>
            
        </div>
    )
}

export default Balance