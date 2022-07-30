import React, { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMember, updateMemberInfo } from "../../store/members/action";

const memberInputReducer = (state, action) => {
    switch (action.type) {
      case "NAME":
        return {...state, name: action.value};
    
      case "EMAIL":
        
        return {...state, email: action.value};

      default:
        return state;
    }
}

function MemberForm({member, mode }) {
//   const { members } = useSelector((state) => state.members);
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const [isValided, setIsValided] = useState(false);
  const [memberInput, dispatch] = useReducer(memberInputReducer, member)
  const handleMemberInput = (name, value) => {

    switch (name) {
      case "name":
        dispatch({type:'NAME', value});
        break;
      case "email":
        dispatch({type:'EMAIL', value})
        break;
      default:
        break;
    }
  };

  const handleMemberForm = async (e) => {
    e.preventDefault();
    if (!validate(memberInput)) {
      if(memberInput.id){
        //update
        await reduxDispatch(updateMemberInfo(memberInput))
        navigate('/members')
      }else{
        //create
        await reduxDispatch(createMember(memberInput))
        navigate('/members')
      }

    }
  };

  const validate = (memberInput) => {
    const validName = memberInput.name.trim();
    if (validName.length > 1) {
      setIsValided(false);
      return false;
    } else {
      setIsValided(true);
      return true;
    }
  };

  useEffect(() => {
  });

  return (
    <div>
      <form onSubmit={handleMemberForm} className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Member Name</label>
          <input
            onChange={(e) => handleMemberInput("name", e.target.value)}
            type="text"
            name="name"
            className={`w-full border h-10 rounded-sm p-2 text-base ${
              isValided ? "border-red-400" : "border-zinc-300"
            }`}
            value={memberInput.name}
            required
          />
          {isValided && (
            <span className="text-rose-800 font-medium">
              {"member name is required"}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="email"> Member E-mail</label>
          <input type="email" name="email" onChange={(e) => handleMemberInput("email", e.target.value)} className="w-full border h-10 rounded-sm p-2 text-base" value={memberInput.email}/>
        </div>
       
        <div className="right-0">
          <button
            type="submit"
            className=" bg-sky-700 rounded-md mt-4 p-2 text-white hover:bg-sky-800"
          >
            {mode ==='update' ? 'Update': 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MemberForm;
