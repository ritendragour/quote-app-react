const NewsFinalReducer =(state, action) =>{
    switch(action.type){

        case "GET_NEWS" :
            return {
            ...state,
            newsss : action.payload
        }


        default: return state
    }
}

export default NewsFinalReducer