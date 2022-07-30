import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TaskForm from "../forms/TaskForm";

function TaskUpdate() {
  const { id } = useParams();
  const task = useSelector((state: any) =>
    state.tasks.tasks.filter((task: any) => task.id == id)
  );

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 pt-10 ">
        <div className="w-2/5 flex justify-center items-center">
          <div className="font-bold text-lg">Task Update</div>
        </div>
        <div className="rounded-md border border-solid shadow-xl w-1/3 px-10 py-5 ">
          {/** create new task form */}
          <TaskForm task={task[0]} mode="update" />
        </div>
      </div>
    </div>
  );
}

export default TaskUpdate;
