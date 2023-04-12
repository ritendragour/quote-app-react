import { createContext, useReducer } from "react";
import QuoteReducer from "./QuoteReducer";

const QuoteContext = createContext()

export const QuoteProvider = ({children}) => {

    const initailstate = {
        quote: {"_id":"DNjQty5jeU","content":"Communications tools don't get socially interesting until they get technologically boring.","author":"Clay Shirky","tags":["technology"],"authorSlug":"clay-shirky","length":90,"dateAdded":"2019-12-14","dateModified":"2022-01-07"}
    }
    const [state, dispatch] = useReducer(QuoteReducer, initailstate)

    return (
        <QuoteContext.Provider value={
            {
                ...state,
                dispatch
            }
        }>
            {children}
        </QuoteContext.Provider>

    )
}

export default QuoteContext