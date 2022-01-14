import React, {useContext, useState} from "react"
import {useDispatch} from "react-redux";
import * as postActions from "../../actions/postActions"
import {useHistory} from "react-router-dom"

const Context = React.createContext

export default function CreatePostComponent(){
    let history = useHistory()

    const dispatch = useDispatch()
    const [postState,setPostState] = useState({
        id: 3,
        userId: 2,
        title: "",
        body: ""
    })

    const changePostValue = (event) => {
        // console.log(event.target.value)
        setPostState({
            ...postState,
            [event.target.name] : event.target.value
        })
    }

    const submitPost = (event) => {
        postActions.createPost(postState)
        history.push("/")
        event.preventDefault()
    }

    return (
            <div>
                <div className="card">
                    <h2 className="align-center  font-weight-bold">Create Post</h2><br/><br/>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Post Title : </label><br/>
                            <input type="text" name="title"  onChange={changePostValue} value={postState.title}/><br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Post Content : </label><br/>
                            <textarea name="body" onChange={changePostValue} value={postState.body} type="text" placeholder="Enter testimony body" rows="8" cols="73"></textarea>
                        </div>
                    </form>

                    <input type="submit" value="Post Testimony" onClick={submitPost}/>
                </div>
            </div>
    )
}