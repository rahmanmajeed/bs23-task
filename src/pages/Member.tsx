import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import List from "../components/member/List";
function Member() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 pt-10 ">
      <div className="w-2/5 flex justify-between items-center">
        <div className="font-bold text-lg">Member List</div>
        <div>
          <NavLink to="create">
            <span className="bg-orange-500 text-white py-2 px-3 font-semibold rounded-md">
              create new member
            </span>
          </NavLink>
        </div>
      </div>
      <List />
      <Outlet />
    </div>
  );
}

export default Member;
