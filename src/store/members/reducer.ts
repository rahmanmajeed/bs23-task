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
    case "GET_ALL_MEMBER":
      return state;

    case "CREATE_NEW_MEMBER":
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    case "UPDATE_MEMBER_INFO":
      return {
        ...state,
        members: [
          ...state.members.filter((member) => member.id != action.payload.id),
          action.payload,
        ],
      };
    case "DELETE_MEMBER":
      return {
        ...state,
        members: [
          ...state.members.filter((member) => member != action.payload),
        ],
      };

    default:
      return state;
  }
};

export default memberReducer;
