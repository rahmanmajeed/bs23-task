import React from "react";
import { useSelector } from "react-redux";

function TaskCreate() {
  const { members } = useSelector((state: any) => state.members);

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 pt-10 ">
        <div className="w-2/5 flex justify-center items-center">
          <div className="font-bold text-lg">Task Create</div>
        </div>
        <div className="rounded-md border border-solid shadow-xl w-1/3 px-10 py-5 ">
          {/** create new task form */}
          <form action="#">
            <div>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" className="w-full border" />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                name=""
                id=""
                cols={5}
                rows={3}
                className="w-full border mt-5"
              ></textarea>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <select name="" id="" className="w-full border mt-3">
                <option value="">-Select Member-</option>

                {members.map((member: any) => (
                  <option key={member.id} value={member.id}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="right-0">
              <button
                type="submit"
                className=" bg-sky-700 rounded-md mt-4 p-2 text-white hover:bg-sky-800"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskCreate;
