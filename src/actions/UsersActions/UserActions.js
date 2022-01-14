import userStore from "../../store/UsersStore";
import * as actions from "./UsersActionTypes"
import axios from  "axios"
import store from "../../store";


export const get_all_users = async () => {
    const allUsersHandler = await  axios.get(`https://jsonplaceholder.typicode.com/users`)
    store.dispatch(getAllUsersAction(allUsersHandler.data))
}

const getAllUsersAction = (allUsers) => {
    return {
        type: actions.GET_ALL_USERS,
        payload: allUsers
    }
}

export const getUser = async (id) => {
    const userHandler =  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    userStore.dispatch(getUserAction(id))
}

const getUserAction = (id) => {
    return {
        type: actions.GET_USER,
        payload: {
            id: id
        }
    }
}

export const addUser = async (user) => {
    await  axios.post(`https://jsonplaceholder.typicode.com/users`,user)
    userStore.dispatch(addUserAction(user))
}

const addUserAction  = (user) => {
    return {
        type: actions.ADD_USER,
        payload: user
    }
}

export const updateUser  = async (user) => {
    await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`,user)
    userStore.dispatch(updateUser(user))
}

const updateUserAction = (user) => {
    return {
        type: actions.UPDATE_USER,
        payload: user
    }
}

export const deleteUser =  async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    userStore.dispatch(deleteUser(id))
}

const deleteUserAction = (id) => {
    return {
        type: actions.DELETE_USER,
        payload: id
    }
}