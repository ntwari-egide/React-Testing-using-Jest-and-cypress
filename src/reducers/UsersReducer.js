import * as actionTypes from "../actions/UsersActions/UsersActionTypes"
const initialState = []

export default  function UsersReducer(state = initialState,action){
    switch (action.type) {
        case actionTypes.GET_ALL_USERS:
            // console.log("We have : ",action.payload)
            // console.log ("here:",[...state,
            //     action.payload])
            // console.log("our state: ",state)

            // return {...state,
            // initialState: [...state.initialState, action.paylaod]
            // }

            return action.paylaod



        case actionTypes.GET_USER:
            return state.filter(user => user.id === action.payload.id)

        case actionTypes.ADD_USER:
            return [
                ...state,action.paylaod
            ]

        case actionTypes.UPDATE_USER:
            return state.map(user => {
                if(user.id === action.payload.id){
                    return action.payload
                }
            })

        case actionTypes.DELETE_USER:
            return state.filter(user => user.id !== action.payload.id)

        default:
            return state
    }
}