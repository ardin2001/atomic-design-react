import { useEffect,useRef } from "react";
import AuthLayout from "../components/layouts/authlayouts";
import FormLogin from "../components/fragments/formLogin";

const CounterPage = () =>{
    const useRefFocus = useRef();

    useEffect(() =>{
        useRefFocus.current.focus();
        useRefFocus.current.style.outlineColor = "blue"
    },[])

    return(
        <AuthLayout title="Login" page="login">
            <FormLogin ref={useRefFocus} />
        </AuthLayout>
    )
}

export default CounterPage;