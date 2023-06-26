const Button = props =>{
    const {children,classname="bg-black"} = props;

    return(
        <button className={`p-1 font-semibold rounded-md ${classname} text-white `}>
            {children}
        </button>
    )
}
export default Button;