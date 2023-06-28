import AuthLayout from "../components/layouts/authlayouts";
import FormLogin from "../components/fragments/formLogin";
import {Link} from 'react-router-dom';

const LoginPage = () =>{
    return(
        <AuthLayout title="Login">
            <FormLogin />
            <p className="py-2 text-center">Dont't have an account ? <Link to="/register" className="font-bold text-blue-600">Sign up</Link> </p>
        </AuthLayout>
    )
}

export default LoginPage;