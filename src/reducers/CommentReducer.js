import * as commentAction from "../actions/CommentActionType"
let initialState = [{
    PostID: 1,
    Id: 1,
    Name: "to work out how they work",
    Email: "Eliseo@gardner.biz",
    Body: "cheering as if it is indeed a great pleasure to the \ ntempora which needs \ fluid and the like \ nreiciendis for wisdom and denouncing"
},
    {
        PostID: 1,
        Id: 2,
        Name: "Th is another comment from ntwari egide",
        Email: "ntwari@rca.rw",
        Body: "cheering as if it is indeed a great pleasure to the \ ntempora which needs \ fluid and the like \ nreiciendis for wisdom and denouncing"
    }]
export default function CommentReducer(state= initialState,action){
    switch (action.type) {
        case commentAction.GET_COMMENT_BY_ID:
            console.log("reached here : ",action.payload)
            return action.payload
        default:
            return state
    }
}