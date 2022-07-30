import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLoggedIn } from "../../store/global/actions";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, userData, app } = useSelector(
    (state: any) => state.global
  );
  const [errorMessages, setErrorMessages] = useState("");
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  /**
   *
   * @param {username,password}
   */
  const handleLogin = (e: any) => {
    e.preventDefault();
    const checkUser = userData.some((element: any) => {
      if (element.username === username && element.password === password) {
        return true;
      }
      return false;
    });

    if (checkUser) {
      dispatch(setUserLoggedIn({ username, password }, true));
      navigate("/dashboard");
    } else {
      setErrorMessages("Invalid username or password");
      dispatch(setUserLoggedIn({}, false));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <p className="text-center text-3xl font-bold">Login {app}</p>
      <div className="bg-slate-100 w-1/5 h-64 m-6 rounded-sm border border-slate-100 shadow-lg flex flex-col gap-9 justify-center items-center px-5 py-5">
        <form onSubmit={handleLogin}>
          <div className="text-rose-800 font-medium text-center">
            {errorMessages}
          </div>
          <div>
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              className="p-5 border border-solid h-10 w-full focus:outline-zinc-400"
              type="text"
              name="username"
              required
              onChange={(e: any) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="username" className="font-semibold">
              Password
            </label>
            <input
              className="p-5 border border-solid h-10 w-full focus:outline-zinc-400"
              type="password"
              name="password"
              required
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-700 rounded-md mt-4 p-2 text-white hover:bg-sky-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
