import React, { useState, useEffect,useContext } from 'react';
import postsStore from "../../store/postsStore";
import {Provider, useSelector,useDispatch} from "react-redux";
import * as postsActions from "../../actions/postActions"
import * as postActions from "./../../actions/postActions"
import * as commentActions from "../../actions/CommentActions"
import {Link} from "react-router-dom";
import commentStore from "../../store/CommentStore";
import CommentComponent from "./CommentComponent";
import store from "../../store";
const Content = React.createContext()

export default function WelcomeComponent(){

    useEffect(() => {
        console.log("State changed ")
        postsActions.resetPostStore()
    },[]);

    const postState =  () => {
        return store.getState();
    }
    const dispatch = useDispatch()

    const allState = useSelector(postState)
    console.log("All store : ",allState)

    let allPostsState = allState.posts

    return (
        <Content.Provider value={dispatch}>
            <div   className="container content">
                <br/>
                <Link type="button" className="btn btn-primary" to="/create-post">Add post</Link>
                <br /><br/>
                <h4 className="text-center">All new posts : </h4><br />
                <div className="row">
                    <ListofPosts allPosts={allPostsState} />
                </div>
                <br/>
            </div>
        </Content.Provider>
    )

}

function ListofPosts ({allPosts}){
    return allPosts.map(post =>
        <CurrentPost key={post.id} {...post} />
    )
}

function CurrentPost({...postContent}){

    const dispatch  = useContext(Content)
    return (
            <div className="col-sm-3">
                <h6>Title : {postContent.title}</h6>
                <p>Message  : {postContent.body}</p>

                <CommentComponent postId={postContent.id} />

                <Link type="button" className="btn btn-primary" to="/edit" to={{pathname: "/edit-post",state: postContent}}>Edit</Link>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button  type="button" className="btn btn-danger" onClick={() => {
                    postActions.deletePost(postContent.id)
                }}>Delete</button>

            </div>


    )
}