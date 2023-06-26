import InputForm from "../elements/input";
import Button from "../elements/button";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        htmlFor="email"
        title="email"
        placeholder="example@gmail.com"
      />
      <InputForm htmlFor="password" title="Password" placeholder="***" />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
