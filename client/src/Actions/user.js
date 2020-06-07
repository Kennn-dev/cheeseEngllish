export const userLogin = ( status ) => {
    return {
        type : 'USER_LOGIN',
        payload : status,
    }
}

export const userLogout = ( status ) => {
    return {
        type : 'USER_LOGOUT',
        payload : status,
    }
}