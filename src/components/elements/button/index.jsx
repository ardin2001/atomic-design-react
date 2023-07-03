const Button = props =>{
    const {children,classname} = props;
    return(
        <button className={`p-1 font-semibold rounded-md ${classname} text-white `}>
            {children}
        </button>
    )
}

const ButtonOnlick = props =>{
    const {children,classname,id,HandlerCarts} = props;
    return(
        <button className={`p-1 font-semibold rounded-md ${classname} text-white `} onClick={() => HandlerCarts(id)}>
            {children}
        </button>
    )
}

export {Button,ButtonOnlick};