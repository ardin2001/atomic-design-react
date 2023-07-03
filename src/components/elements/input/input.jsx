import { forwardRef } from "react";
import useInput from "../../../hooks/useInput";

const Input = forwardRef((props,ref) =>{
    const {type,placeholder,name,id} = props
    const [value,setValue] = useInput("");
    console.log(value)
    return(
        <input type={type}
        className="text-sm border rounded w-full p-2 text-slate-700 placeholder:opacity-50"
        placeholder={placeholder} name={name} id={id} ref={ref} value={value} onChange={setValue} />
    )
})

export default Input