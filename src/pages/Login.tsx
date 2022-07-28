import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/forms/LoginForm";
import { setAppTitle } from "../redux/global/actions";

function Login() {
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <LoginForm></LoginForm>
    </div>
  );
}

export default Login;
