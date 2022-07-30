import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = (type: any) => {
    switch (type) {
      case "tasks":
        return navigate("/tasks");
      case "members":
        return navigate("/members");
      default:
        break;
    }
  };
  return (
    <div className="p-10 flex justify-center items-center gap-10">
      <button
        type="button"
        className="px-5 py-2 w-3/12 border border-solid bg-orange-200 rounded-md"
        onClick={() => handleClick("tasks")}
      >
        Tasks
      </button>
      <button
        type="button"
        className="px-5 py-2 w-3/12 border border-solid bg-sky-700 text-white rounded-md"
        onClick={() => handleClick("members")}
      >
        Members
      </button>
    </div>
  );
}

export default Dashboard;
