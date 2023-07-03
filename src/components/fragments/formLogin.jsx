import InputForm from "../elements/input";
import {Button} from "../elements/button";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/api";

const FormLogin = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    async function Login(username, password) {
      let response = await loginUser({ username, password });
      if (response.status == 200) {
        response = await response.json();
        localStorage.setItem("token",response.token)
        navigate("/products-api");
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
    </form>
  );
});

export default FormLogin;
