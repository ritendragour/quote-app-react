const QuoteReducer = (state , action) =>{
    switch(action.type){

        case "CHANGE":
            return{
                ...state,
                quote : action.payload
            }



        default :
        return state
    }
}

export default QuoteReducer