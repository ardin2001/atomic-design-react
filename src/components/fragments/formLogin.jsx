import InputForm from "../elements/input";
import Button from "../elements/button";
import { forwardRef } from "react";

const FormLogin = forwardRef((props,ref) => {
  const onSubmitHandler = (e) =>{
    e.preventDefault()
    localStorage.setItem("email",e.target.email.value)
    localStorage.setItem("password",e.target.password.value)
    window.location.href("/products")
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <InputForm
        htmlFor="email"
        title="Email"
        placeholder="example@gmail.com"
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
