import InputForm from "../elements/input";
import { ButtonOnlick } from "../elements/button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm htmlFor="text" title="Fullname" placeholder="John Doe" />
      <InputForm
        htmlFor="email"
        title="Email"
        placeholder="example@gmail.com"
      />
      <InputForm htmlFor="password" title="Password" placeholder="***" />
      <InputForm
        htmlFor="password"
        title="Confirm Password"
        placeholder="***"
      />
      <ButtonOnlick classname="bg-blue-600 w-full">Register</ButtonOnlick>
    </form>
  );
};

export default FormRegister;
