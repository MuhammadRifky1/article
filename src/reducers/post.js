import { FETCH_ARTICLE } from "../actions/types";

const initialState = {
    items: [],
    item: {}
}


const Article = (state = initialState, action) =>{
    switch (action.type){
        case FETCH_ARTICLE:
            return { items: action.payload }
        default:
            return state
            
    }
}


export default Article