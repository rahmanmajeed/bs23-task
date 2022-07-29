
export const setUserLoggedIn = (user, isLogged) => async(dispatch) => {
   
    await dispatch({
        type:'IS_LOGGED_IN',
        user,
        isLogged
    })


} 