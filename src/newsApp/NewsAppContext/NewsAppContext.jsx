import { createContext, useReducer } from "react";
import NewsFinalReducer from "./NewsFinalReducer";

const NewsAppContext = createContext()

export const NewsAppProvider = ({ children }) => {
    const initialstate = {
        newsss: [
        ]
}
const [state, dispatch] = useReducer(NewsFinalReducer, initialstate)

return (
    <NewsAppContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </NewsAppContext.Provider>
)

}

export default NewsAppContext