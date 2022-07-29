import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

function Login() {
  const redirect = useNavigate();

  const { isLoggedIn } = useSelector((state: any) => state.global);

  useEffect(() => {
    if (isLoggedIn) {
      redirect("/dashboard");
    }
  }, []);
  return (
    <div className="w-full">
      <LoginForm />
    </div>
  );
}

export default Login;
