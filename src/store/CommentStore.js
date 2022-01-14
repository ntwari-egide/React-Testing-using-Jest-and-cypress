import {createStore} from "redux";
import CommentReducer from "../reducers/CommentReducer";
import reducer from "./../reducers/index"

const commentStore = createStore(reducer)

export default commentStore