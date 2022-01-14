import {createStore} from "redux";
import postReducer from "../reducers/PostsReducer";

let postsStore = createStore(postReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default postsStore;