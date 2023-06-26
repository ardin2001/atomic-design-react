const Input = props =>{
    const {type,placeholder} = props
    return(
        <input type={type}
        className="text-sm border rounded w-full p-2 text-slate-700 placeholder:opacity-50"
        placeholder={placeholder} />
    )
}

export default Input