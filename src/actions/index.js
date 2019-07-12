import {
    FETCH_ARTICLE
} from './types'


export const fetchPosts = () => dispatch => {
    console.log("func")
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => dispatch({type: FETCH_ARTICLE, payload: data}) )
}
  