import { USER_TYPES } from '../actions/userAction'

const initialState = {
    loading: false,
    users: []
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case USER_TYPES.GET_USERS:
            return {
                ...state,
                users: action.payload.users
            };
        default:
            return state;
    }
}

export default userReducer
