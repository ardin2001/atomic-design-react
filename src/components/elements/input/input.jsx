import { forwardRef } from "react";

const Input = forwardRef((props,ref) =>{
    const {type,placeholder,name,id} = props
    return(
        <input type={type}
        className="text-sm border rounded w-full p-2 text-slate-700 placeholder:opacity-50"
        placeholder={placeholder} name={name} id={id} ref={ref} />
    )
})

export default Input