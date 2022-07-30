import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MemberForm from "../forms/MemberForm";

function MemberUpdate() {
  const { memberId } = useParams();
  const member = useSelector((state: any) =>
    state.members.members.filter((member: any) => member.id == memberId)
  );

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 pt-10 ">
        <div className="w-2/5 flex justify-center items-center">
          <div className="font-bold text-lg">Member Info Update</div>
        </div>
        <div className="rounded-md border border-solid shadow-xl w-1/3 px-10 py-5 ">
          {/** create new task form */}
          <MemberForm member={member[0]} mode="update" />
        </div>
      </div>
    </div>
  );
}

export default MemberUpdate;
