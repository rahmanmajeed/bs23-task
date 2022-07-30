import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTask, updateTask } from "../../store/tasks/action";

const taskInputReducer = (state, action) => {
    switch (action.type) {
      case "TITLE":
        return {...state, title: action.value};
    
      case "DESCRIPTION":
        
        return {...state, description: action.value};

      case "ASSIGN_TO":
        return {...state, assign_to: action.value};
        
      default:
        return state;
    }
}

function TaskForm({task, mode }) {
  const { members } = useSelector((state) => state.members);
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const [isValided, setIsValided] = useState(false);
  const [taskInput, dispatch] = useReducer(taskInputReducer, task)
  const handleTaskInput = (name, value) => {

    switch (name) {
      case "title":
        dispatch({type:'TITLE', value})
        break;
      case "description":
        dispatch({type:'DESCRIPTION', value})
        break;
      case "assign_to":
        dispatch({type:'ASSIGN_TO', value})

        break;

      default:
        break;
    }
  };

  const handleTaskForm = async (e) => {
    e.preventDefault();
    if (!validate(taskInput)) {
      if(taskInput.id){
        //update
        await reduxDispatch(updateTask(taskInput))
        navigate('/tasks')
      }else{
        //create
        await reduxDispatch(createTask(taskInput))
        navigate('/tasks')
      }

    }
  };

  const validate = (taskInput) => {
    const validInput = taskInput.title.trim();
    if (validInput.length > 1) {
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
      <form onSubmit={handleTaskForm} className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => handleTaskInput("title", e.target.value)}
            type="text"
            name="title"
            className={`w-full border h-10 rounded-sm p-2 text-base ${
              isValided ? "border-red-400" : "border-zinc-300"
            }`}
            value={taskInput.title}
            required
          />
          {isValided && (
            <span className="text-rose-800 font-medium">
              {"title is required"}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            cols={5}
            rows={3}
            className="w-full border mt-5 rounded-sm p-2 text-base"
            onChange={(e) => handleTaskInput("description", e.target.value)}
            value={taskInput.description}
          ></textarea>
        </div>
        <div>
          <label htmlFor="description">Assign to</label>
          <select
            name="assign_to"
            id=""
            className="w-full border mt-3 rounded-sm py-2 pr-3 text-base"
            onChange={(e) => handleTaskInput("assign_to", e.target.value)}
            value={taskInput.assign_to}
          >
            <option value="">-Select Member-</option>

            {members.map((member) => (
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
            {mode==='update' ? 'Update': 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
