const Button = props =>{
    const {children,classname,popUp} = props;
    return(
        <button className={`p-1 font-semibold rounded-md ${classname} text-white `} onClick={() => popUp()}>
            {children}
        </button>
    )
}
export default Button;