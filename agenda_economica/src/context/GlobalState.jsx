import { createContext,useContext,useReducer , useEffect} from "react";
import AppReducer from "./AppReducer";
export const Context = createContext()
const initialState = {
    transaction: []
}
export const useGlobalState = ()=>{
    const context = useContext(Context);
    return context
}
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState,
    () => {
        const localData = localStorage.getItem('transactions');
        return localData ? JSON.parse(localData) : initialState;
    });
       
        
    useEffect(()=>{
        localStorage.setItem('transactions',JSON.stringify(state))
    },[state])

    const addTransaction = (transaction )=>{
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }

    const deleteTransaction = ( id )=>{
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }

    return (
        <Context.Provider value={{
            transaction:state.transaction,
            addTransaction,
            deleteTransaction,
        }}>
                {children}
        </Context.Provider>
    )
}