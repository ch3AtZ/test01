import { useState } from "react";

const App11 = (props) => {
    const [count , setCount] = useState(0)
    const [text , setText] = useState('')

    return(
        <div>
            <p>
                the current {text}  is  {count } 
            </p>
            <button onClick={()=>setCount(count+1)}>INCREASE</button>
            <button onClick={()=>setCount(count-1)}>DECREASE </button> {/* count > 0 ? count -1 : 0 [for not letting value go below 0 ]  */}
            <button onClick={()=>setCount(0)}>RESET</button>
            <input value={text} onChange={(e) => setText(e.target.value)} ></input>

        </div>
    )

}
export default App11;