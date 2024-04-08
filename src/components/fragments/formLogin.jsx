import InputForm from "../elements/input";
import { Button } from "../elements/button";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/api";
import useError from "../../hooks/useError";
import { ContextTheme } from "../../context/CreateContext";

const FormLogin = () => {
  const [error, setError] = useState("");
  const [errUsername, setErrUsername] = useError("");
  const [errPassword, setErrPassword] = useError("");
  const focusRef = useRef('');
  const navigate = useNavigate();
  const {theme,setTheme} = useContext(ContextTheme)

  useEffect(() =>{
    focusRef.current.focus();
  },[])

  const HandlerTheme = () =>{
    setTheme(prev => !prev)
  }

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
      <div className={`${theme ? 'bg-red-500' :'bg-green-500'} text-white fixed p-3 top-10 left-3/4`} onClick={HandlerTheme}>
        <p>{theme ? 'light' : 'dark'}</p>
      </div>
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
