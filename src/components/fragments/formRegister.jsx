import InputForm from "../elements/input";
import Button from "../elements/button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm htmlFor="text" title="Fullname" placeholder="John Doe" />
      <InputForm
        htmlFor="email"
        title="email"
        placeholder="example@gmail.com"
      />
      <InputForm htmlFor="password" title="Password" placeholder="***" />
      <InputForm
        htmlFor="password"
        title="Confirm Password"
        placeholder="***"
      />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormRegister;
