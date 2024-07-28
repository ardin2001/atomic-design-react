import { useState, useEffect } from "react";
export default function Coba() {
    const [count, setCount] = useState(0);

    useEffect(() => {
       console.log("count :", count);
       return () =>{
           console.log("clean up useEffect");
       }
    }, [count]);
    return (
        <div>
            <h1>Coba : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}