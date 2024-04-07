import InputForm from "../elements/input";
import { Button } from "../elements/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/api";
import useError from "../../hooks/useError";

const FormLogin = () => {
  const [error, setError] = useState("");
  const [errUsername, setErrUsername] = useError("");
  const [errPassword, setErrPassword] = useError("");
  const focusRef = useRef('');
  const navigate = useNavigate();

  useEffect(() =>{
    focusRef.current.focus();
  },[])
  const onSubmitHandler = (event) => {
    event.preventDefault();
    async function Login(username, password) {
      try {
        let response = await loginUser({ username, password });
        if (!response.ok) {
          response = await response.json();
          throw new Error(response);
        }

        response = await response.json();
        localStorage.setItem("token", response.token);
        navigate("/products-api");
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      }
    }
    
    Login(event.target.username.value, event.target.password.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {errUsername!="" ? <p>{errUsername}</p> : false}
      <InputForm
        htmlFor="username"
        title="Username"
        placeholder="John Doe"
        ErrorInputHandler={setErrUsername}
        ref={focusRef}
      />
      <InputForm
        htmlFor="password"
        title="Password"
        placeholder="*"
        ErrorInputHandler={setErrPassword}
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      <p className="font-medium text-red-600 text-center">{error}</p>
    </form>
  );
};

export default FormLogin;
