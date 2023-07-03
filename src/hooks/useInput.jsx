import { useState } from "react"

const useInput = (inputValue) =>{
    const [value, setValue] = useState(inputValue)

    const HandlerValue = (event) =>{
        setValue(event.target.value)
    }

    return [value,HandlerValue];
}

export default useInput;