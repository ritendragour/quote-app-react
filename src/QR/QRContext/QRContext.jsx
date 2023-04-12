import { createContext, useReducer } from "react";
import QRReducer from "./QRReducer";

const QRContext = createContext()

export const QRProvider = ({children})=>{

const initialstate = {
    QRS : "check QR"
}

const [state, dispatch] = useReducer(QRReducer, initialstate)
    return(
        <QRContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </QRContext.Provider>
    )
}

export default QRContext
