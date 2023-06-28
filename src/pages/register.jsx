import AuthLayout from "../components/layouts/authlayouts";
import FormRegister from "../components/fragments/formRegister";
import {Link} from 'react-router-dom';

const RegisterPage = () =>{
    return(
        <AuthLayout title="Register">
            <FormRegister />
            <p className="py-2 text-center">Have an account ? <Link to="/login" className="font-bold text-blue-600">Sign in</Link> </p>
        </AuthLayout>
    )
}

export default RegisterPage;