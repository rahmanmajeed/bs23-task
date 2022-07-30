import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteMember } from "../../store/members/action";

function List() {
  const { members } = useSelector((state: any) => state.members);
  const { tasks } = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();

  /**
   * delete member from list
   * @param id
   */

  const removeMember = (id: any) => {
    dispatch(deleteMember(id));
  };

  /**
   * calculate @total task no.
   * return @task no.
   */
  const totalTask = (member: any) => {
    const no_of_task = tasks.filter(
      (task: any) => member.id == task.assign_to
    ).length;

    return (
      <span className="px-3 py-1 bg-green-500 rounded-lg text-lg font-semibold">
        {no_of_task}
      </span>
    );
  };

  return (
    <div className="flex justify-center items-center w-full">
      <table className="border-collapse border border-slate-400 w-2/5">
        <thead>
          <tr>
            <th className="border border-slate-300 py-1">Title</th>
            <th className="border border-slate-300 py-1">No. of Task</th>
            <th className="border border-slate-300 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member: any) => (
            <tr key={member.id} className="">
              <td className="border border-slate-300 py-2 px-1 hover:font-semibold">
                <NavLink
                  to={`/members/update/${member.id}`}
                  className="hover:text-blue-500 hover:underline"
                >
                  {member.name}
                </NavLink>
              </td>
              <td className="border border-slate-300 py-2 px-1 text-center">
                {totalTask(member)}
              </td>
              <td className="border flex justify-center items-center gap-5">
                <button
                  type="button"
                  onClick={() => removeMember(member)}
                  className="p-1 mr rounded-md bg-rose-700 text-white"
                >
                  Delete
                </button>
                <NavLink
                  to={`/members/update/${member.id}`}
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
