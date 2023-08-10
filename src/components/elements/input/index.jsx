import Label from "./label";
import Input from "./input";

const InputForm = (props) =>{
    const {htmlFor,title,placeholder,ErrorInputHandler} = props;
    var name = title.toLowerCase();
    name = name.replace(" ","");
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{title}</Label >
            <Input placeholder={placeholder} type={htmlFor} id={name} name={name} ErrorInputHandler={ErrorInputHandler} />
        </div>
    )
};

export default InputForm