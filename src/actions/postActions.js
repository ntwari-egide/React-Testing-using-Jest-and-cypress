import * as actions from "./postActionTypes";
import axios from "axios"
import postsStore from "../store/postsStore";
import store from "../store";

export  const resetPostStore = async () => {
    const dataReturned = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    // console.log("Data returned : ",dataReturned.data)
    store.dispatch(resetPosts(dataReturned.data))
    // return dataReturned.data
}

export const getAllPosts =  async () => {
    const dataReturned = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    postsStore.dispatch(resetPosts(dataReturned.data))
}

export const getPostById = async (id) => {
    const dataReturned = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    postsStore.dispatch(resetPosts(dataReturned.data))
}

export const createPost = async (post) => {
    const dataReturned  = await axios.post(`http://jsonplaceholder.typicode.com/posts`,post)
    postsStore.dispatch(createPostAction(post))
}

export const createPostAction = (post) => {
    return {
        type: actions.CREATE_POST,
        payload : post
    }
}

export const updatePost = async (post) => {
    const dataReturned  = await axios.put(`http://jsonplaceholder.typicode.com/posts/${post.id}`,post)
    postsStore.dispatch(updatePostAction(dataReturned.data))
}

export const updatePostAction = (post) => {
    return {
        type: actions.UPDATE_POST,
        payload : post
    }
}


export const deletePost = async (id) => {
    await axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`)
    postsStore.dispatch(deletePostAction(id))
}
export const deletePostAction = (id) => {
    return {
        type: actions.DELETE_POST,
        payload: {
            id: id
        }
    }
}



export const resetPosts = (allPosts) => {
    return {
        type: actions.RESET_POSTS,
        payload: allPosts
    }
}