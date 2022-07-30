export const getAllTasks = () => async (dispatch: any) => {
  dispatch({});
};

/**
 * Create new task
 * @param payload
 * @returns {state}
 */

export const createTask = (payload: any) => async (dispatch: any) => {
  payload.id = Math.floor(Math.random() * 100);
  payload.created_at = new Date().toDateString();
  dispatch({
    type: "CREATE_TASK",
    payload,
  });
};

/**
 * Update task
 * @param payload
 * @returns {state}
 */
export const updateTask = (payload: any) => async (dispatch: any) => {
  payload.created_at = new Date().toDateString();
  dispatch({
    type: "UPDATE_TASK",
    payload,
  });
};

/**
 * Delete task
 * @param payload
 * @returns {state}
 */
export const deleteTask = (payload: any) => async (dispatch: any) => {
  dispatch({
    type: "DELETE_TASK",
    payload,
  });
};
