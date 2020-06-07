const isLogin = false
const userReducer = (state = isLogin , action) =>{ 
    switch (action.type) {
        case 'USER_LOGIN': {
                const newState = true
                return newState ;
            }
        case 'USER_LOGOUT': {
                const newState = false
                return newState;
            }
        default:
            return state;
    }
}

export default userReducer;