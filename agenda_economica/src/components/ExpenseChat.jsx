import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from "../context/GlobalState"
function ExpenseChat() {
    const { transaction } = useGlobalState();
    console.log(transaction);
    const totalIncomes = transaction.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalExpenses = transaction.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

    const totalExpensesPorcentage = Math.round(( totalExpenses / totalIncomes)*100);
    const incomesPercentage = 100 - (totalExpensesPorcentage);


    
    return (
        <VictoryPie 
        colorScale={[ "#e74c3c","#2ecc71" ]}
        data={[
            { x: "Expenses", y:totalExpensesPorcentage },
            { x: "Incomes", y:incomesPercentage },
        ]}
        animate={{duration:200}}
        labels={({ datum }) => datum.y}
        labelComponent={<VictoryLabel
        angle={45}
        style={{fill:"white",}}
        />}
        />
    )
}

export default ExpenseChat