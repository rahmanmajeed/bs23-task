import React from "react";
import { useSelector } from "react-redux";

function List() {
  const { tasks } = useSelector((state: any) => state.tasks);
  return (
    <div className="flex justify-center items-center w-full">
      <table className="border-collapse border border-slate-400 w-2/5">
        <thead>
          <tr>
            <th className="border border-slate-300 py-1">Title</th>
            <th className="border border-slate-300 py-1">Creation Date</th>
            <th className="border border-slate-300 py-1">Assing to</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task: any) => (
            <tr key={task.id} className="">
              <td className="border border-slate-300 py-2 px-1">
                {task.title}
              </td>
              <td className="border border-slate-300 py-2 px-1">
                {task.created_at}
              </td>
              <td className="border border-slate-300 py-2 px-1">
                {task.assign_to}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
