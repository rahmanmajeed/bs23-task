import React from "react";

function Dashboard() {
  return (
    <div className="p-10 flex justify-center items-center gap-10">
      <button
        type="button"
        className="px-5 py-2 w-3/12 border border-solid bg-orange-200 rounded-md"
      >
        Tasks
      </button>
      <button
        type="button"
        className="px-5 py-2 w-3/12 border border-solid bg-sky-700 text-white rounded-md"
      >
        Members
      </button>
    </div>
  );
}

export default Dashboard;
