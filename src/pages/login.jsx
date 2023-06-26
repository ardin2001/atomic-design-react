import AuthLayout from "../components/layouts/authlayouts";
// import FormLogin from "../components/fragments/formLogin";
import FormRegister from "../components/fragments/formRegister";

const LoginPage = () =>{
    return(
        <AuthLayout title="Register">
            <FormRegister />
        </AuthLayout>
    )
}

export default LoginPage;