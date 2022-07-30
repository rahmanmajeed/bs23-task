const initialMemberState = {
  members: [
    {
      id: 1,
      name: "Member 01",
      email: "member@example.com",
    },
  ],
};

const memberReducer = (state = initialMemberState, action: any) => {
  switch (action.type) {
    case "GET_ALL_MEMBERS":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default memberReducer;
