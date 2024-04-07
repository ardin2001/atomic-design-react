import AuthLayout from "../components/layouts/authlayouts";
import FormRegister from "../components/fragments/formRegister";

const RegisterPage = () =>{
    return(
        <AuthLayout title="Register">
            <FormRegister />
        </AuthLayout>
    )
}

export default RegisterPage;