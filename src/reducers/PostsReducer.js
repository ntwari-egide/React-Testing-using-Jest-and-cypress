import * as actions from "../actions/postActionTypes"

let initialPostState = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
];

export default function postReducer(state = initialPostState,action){
    switch (action.type){
        case actions.GET_ALL_POSTS:
            return state;

        case actions.RESET_POSTS:
            return action.payload


        case actions.GET_POST_BY_ID:
            return state.filter(post => post.id === action.payload.id )

        case actions.CREATE_POST:
            return [
                ...state,
                {
                    userId: action.payload.userId,
                    id: action.payload.id,
                    title: action.payload.title,
                    body: action.payload.body
                }
            ]
        case actions.UPDATE_POST:
            return state.map(posts => {
                if(posts.id === action.payload.id){
                    {
                        return {
                            userId: action.payload.userId,
                            id: action.payload.id,
                            title: action.payload.title,
                            body: action.payload.body
                        }
                    }
                }

                return posts;
            })
        case actions.DELETE_POST:
            return state.filter(post => post.id !== action.payload.id )

        default:
            return state;
    }
}