import React, {useEffect,useContext,useRef} from "react";
import * as commentActions from "../../actions/CommentActions";
import commentStore from "../../store/CommentStore";
import {useSelector} from "react-redux"
import store from "../../store";

function CommentComponent({postId}){
    store.subscribe(()=>{
        // console.log("Comment changed : ",store.getState())
    })


    useEffect(()=>{
        console.log("Comment store changed")
        commentActions.get_comment_by_oid(postId)
    },[])

    commentActions.get_comment_by_oid(postId)

    const commentState =() => {
        return store.getState()
    }


    const allComments = useSelector(commentState)
    // console.log("My state : ",allComments)

    let allComment = allComments.comment


    return (
        <div>
            <h6 className="text-center">Comments : </h6><br />
            <div className="row">
                <ListOfComments allComments={allComment} />
            </div>
        </div>
    )
}

function ListOfComments({allComments}){
    return allComments.map(comment =>
        <CommentContent key={comment.id} {...comment} />
    )
}

function CommentContent({...comment}) {
    console.log(comment)
    return (
        <div>
            <div className="col-sm-8">
                <p className="text-primary">Title : {comment.Name}</p>
                <p>Message : {comment.Body}</p>
                <p className="text-success">commented by : {comment.Email}</p>
            </div>
        </div>
    )

}

export default CommentComponent