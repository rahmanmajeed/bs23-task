export const getAllMembers = () => async (dispatch: any) => {
  dispatch({});
};

/**
 * Create new Member
 * @param payload
 * @returns {state}
 */

export const createMember = (payload: any) => async (dispatch: any) => {
  payload.id = Math.floor(Math.random() * 100);
  payload.created_at = new Date().toDateString();
  dispatch({
    type: "CREATE_NEW_MEMBER",
    payload,
  });
};

/**
 * Update Member info
 * @param payload
 * @returns {state}
 */
export const updateMemberInfo = (payload: any) => async (dispatch: any) => {
  payload.created_at = new Date().toDateString();
  dispatch({
    type: "UPDATE_MEMBER_INFO",
    payload,
  });
};

/**
 * Delete Member
 * @param payload
 * @returns {state}
 */
export const deleteMember = (payload: any) => async (dispatch: any) => {
  dispatch({
    type: "DELETE_MEMBER",
    payload,
  });
};
