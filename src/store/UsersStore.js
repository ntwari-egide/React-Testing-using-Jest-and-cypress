import {createStore} from "redux";
import UsersReducer from "../reducers/UsersReducer";

const userStore = createStore(UsersReducer)
console.log("Store content: ",userStore.getState())
export default userStore