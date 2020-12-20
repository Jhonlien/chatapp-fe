import {LOGIN, REGISTER} from '../actions/auth'

const initialState = {
    user : {},
    token : '',
    isLoggedIn : false
}

const authReducer = (state = initialState, action) => {
    // const {type, payload} = action

    switch (action.type) {
        case LOGIN:
          return { 
                ...state,
                user: action.payload,
                token : action.payload.token,
                isLoggedIn : true
            }
        case REGISTER:
            return { 
                    ...state,
                    user: action.payload,
                    token : action.payload.token,
                    isLoggedIn : true
                }
        default:
          return state
    }
}

export default authReducer