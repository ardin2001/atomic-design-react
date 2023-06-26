import Label from "./label";
import Input from "./input";

const InputForm = props =>{
    const {htmlFor,title,placeholder} = props;
    return (
        <div className="mb-6">
            <Label htmlFor={htmlFor}>{title}</Label>
            <Input placeholder={placeholder} type={htmlFor} />
        </div>
    )
}

export default InputForm