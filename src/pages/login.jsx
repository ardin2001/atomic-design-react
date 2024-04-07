import AuthLayout from "../components/layouts/authlayouts";
import FormLogin from "../components/fragments/formLogin";

const LoginPage = () =>{
    return(
        <AuthLayout title="Login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage;