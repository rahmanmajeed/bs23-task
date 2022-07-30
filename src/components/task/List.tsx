import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteTask } from "../../store/tasks/action";

function List() {
  const { tasks } = useSelector((state: any) => state.tasks);
  const { members } = useSelector((state: any) => state.members);
  const dispatch = useDispatch();
  const deleteItem = (id: any) => {
    dispatch(deleteTask(id));
  };

  const taskAssignto = (task: any) => {
    const assigned_member = members.filter(
      (member: any) => member.id == task.assign_to
    )[0];
    if (assigned_member !== undefined) {
      return (
        <span className=" bg-orange-400 p-1 rounded-md text-right">
          {assigned_member.name}
        </span>
      );
    } else {
      return (
        <span className=" bg-rose-500 p-1 rounded-md text-neutral-700">
          {"Not Assigned"}
        </span>
      );
    }
  };
  return (
    <div className="flex justify-center items-center w-full">
      <table className="border-collapse border border-slate-400 w-2/5">
        <thead>
          <tr>
            <th className="border border-slate-300 py-1">Title</th>
            <th className="border border-slate-300 py-1">Creation Date</th>
            <th className="border border-slate-300 py-1">Assign to</th>
            <th className="border border-slate-300 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task: any, index: any) => (
            <tr key={task.id} className="">
              <td className="border border-slate-300 py-2 px-1">
                <NavLink
                  to={`/tasks/update/${task.id}`}
                  className="hover:text-blue-500 hover:underline"
                >
                  {task.title}
                </NavLink>
              </td>
              <td className="border border-slate-300 py-2 px-1">
                {task.created_at}
              </td>
              <td className="border border-slate-300 py-2 px-1 text-center">
                {taskAssignto(task)}
              </td>
              <td className="border flex justify-center items-center gap-5">
                <button
                  type="button"
                  onClick={() => deleteItem(task)}
                  className="p-1 mr rounded-md bg-rose-700 text-white"
                >
                  Delete
                </button>
                <NavLink
                  to={`/tasks/update/${task.id}`}
                  className="p-1 my-3 bg-blue-500 text-white rounded-md"
                >
                  Update
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
