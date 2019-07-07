import {
    FETCH_ARTICLE
} from './types'


export const fetchPosts = () => dispatch => ({
    type: FETCH_ARTICLE,
    payload: fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json)
  })

  