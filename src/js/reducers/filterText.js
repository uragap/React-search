export const filterText = (state = '', action) =>{
    if(action.type === "SEARCH_CHANGE"){
        return action.payload
    }
    return state;
}