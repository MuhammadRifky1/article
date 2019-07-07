import { FETCH_ARTICLE, ADD_ARTICLE } from "../actions/types";
const initialState = {
    items: [],
    item: {}
}


const Article = (state = initialState, action) =>{
    switch (action.type){
        case FETCH_ARTICLE:
            return {...items}
            break
        
        default:
            return state
            
    }
}