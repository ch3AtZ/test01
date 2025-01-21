import React, { useState }  from "react";

const ToggleVisibility = () =>{
    const [isVisible , setisVisible] = useState(false);

    const toggled = () =>{
        setisVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={toggled}>{isVisible ? "Hide" : "Show"} Text</button>
          {isVisible && <p style={{color:'red' , fontWeight:'bold'}}>hello mate ! </p>} 
        </div>
    )
}


export default ToggleVisibility;