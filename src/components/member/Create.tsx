import MemberForm from "../forms/MemberForm";
import TaskForm from "../forms/TaskForm";

/**
 *  task types define
 */
export interface ITask {
  id?: any;
  title: string;
  description?: string;
  assign_to?: string;
}

function MemberCreate() {
  const member = {
    id: 0,
    name: "",
    email: "",
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 pt-10 ">
        <div className="w-2/5 flex justify-center items-center">
          <div className="font-bold text-lg">Member Create</div>
        </div>
        <div className="rounded-md border border-solid shadow-xl w-1/3 px-10 py-5 ">
          <MemberForm member={member} mode="create" />
        </div>
      </div>
    </div>
  );
}

export default MemberCreate;
