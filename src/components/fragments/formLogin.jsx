import InputForm from "../elements/input";
import { Button } from "../elements/button";
import { forwardRef, useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/api";

const FormLogin = forwardRef((props, ref) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();

    async function Login(username, password) {
      try {
        let response = await loginUser({ username, password });
        console.log(response)
        if(!response.ok){
          response = await response.json();
          throw new Error(response)
        }

        response = await response.json();
        localStorage.setItem("token", response.token);
        navigate("/products-api");
      } catch (err) {
        setError(err.message)
        console.log(err.message)
      }
    }
    Login(event.target.username.value, event.target.password.value);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <InputForm
        htmlFor="username"
        title="Username"
        placeholder="John Doe"
        ref={ref}
      />
      <InputForm htmlFor="password" title="Password" placeholder="***" />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      <p className="font-medium text-red-600 text-center">{error}</p>
    </form>
  );
});

export default FormLogin;
