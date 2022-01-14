import React,{useEffect} from "react"
import * as userActions from "../../actions/UsersActions/UserActions"
import {get_all_users} from "../../actions/UsersActions/UserActions";
import userStore from "../../store/UsersStore";
import store from "../../store";
import {useSelector} from "react-redux";
export default function UsersComponent(){

    useEffect(()=>{
        userActions.get_all_users()
    },[])

    // userStore.subscribe(() => {
    //     return userStore.getState()
    //
    // })

    const allUsersHandler = () => {
        console.log("Store content: ",userStore.getState())
       return  userStore.getState()
    }

    // const userstate =
    const allUsers = useSelector(allUsersHandler)
    console.log("Users : ",allUsers)

    return (
        <div>

        </div>
    )
}