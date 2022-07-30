const initialTaskState = {
  tasks: [
    {
      id: 1,
      title: "demo task 01",
      description: "task 01 description",
      assign_to: "",
      created_at: new Date().toDateString(),
    },
    {
      id: 2,
      title: "demo task 02",
      description: "task 02 description",
      assign_to: "",
      created_at: new Date().toDateString(),
    },
  ],
};

const taskReducer = (state = initialTaskState, action: any) => {
  switch (action.type) {
    case "GET_ALL_TASK":
      return state;

    case "CREATE_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task.id != action.payload.id),
          action.payload,
        ],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id != action.payload.id)],
      };

    default:
      return state;
  }
};

export default taskReducer;
