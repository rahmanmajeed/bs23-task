const initialState = {
  title: "bs-23",
  version: 1.0,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_APP_TITLE":
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
};

export default globalReducer;
