import axios from "axios"
import * as commentActionType from "../actions/CommentActionType"
import commentStore from "../store/CommentStore";
import store from "../store";

export  const get_comment_by_oid = async (id) => {
   const comments = await  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    await store.dispatch(setCommentAction(comments.data))
}

export  const setCommentAction = (comments) => {
    return {
        type: commentActionType.GET_COMMENT_BY_ID,
        payload: comments
    }
}