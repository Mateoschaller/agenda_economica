import { useGlobalState } from '../../context/GlobalState';
import TransactionItem from './TransactionItem';

function TransactionList() {
  const {transaction} = useGlobalState(); 
  return (
    <>
      <h3 className='text-slate-300 text-xl font-bold block w-full'>History</h3>
      <ul>{
        transaction.map(transaction=>(
          <TransactionItem transaction={transaction} key={transaction.id}/>
        ))
        }
      </ul>
    </>
  )
}

export default TransactionList