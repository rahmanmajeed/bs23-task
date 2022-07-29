
const initialState = {
  app: "BS-23 Task",
  version: "1.0",
  isLoggedIn: false,
  currentLoggedUser: {},
  userData: [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ],
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOGGED_IN":
      return {
        ...state,
        currentLoggedUser: action.user,
        isLoggedIn:action.isLogged
      };
  
    default:
      return state;
  }
}

export default globalReducer