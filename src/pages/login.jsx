import AuthLayout from "../components/layouts/authlayouts";
import FormLogin from "../components/fragments/formLogin";
import { ContextTheme } from "../context/CreateContext";
import { useState } from "react";

const LoginPage = () => {
  const [theme, setTheme] = useState(true);
  return (
    <AuthLayout title="Login">
      <ContextTheme.Provider value={{ theme, setTheme }}>
        <FormLogin />
      </ContextTheme.Provider>
    </AuthLayout>
  );
};

export default LoginPage;
