import { useState } from "react"

const useError = (inputValue) =>{
    const [Error, setError] = useState(inputValue)

    const HandlerError = (err) =>{
        setError(err)
    }

    return [Error,HandlerError];
}

export default useError;