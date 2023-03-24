import React from "react"
import { useState } from "react"

function TypeMe(){
    const [focus, setFocus] = useState(false);

    function handleFocus(){
        setFocus(true);
    }

    function handleBlur(){
        setFocus(false);
    }

    return(
        <div>
            <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
            {!focus && <p style={{ color: 'red' }}>Please type in here!</p>}
        </div>
    )
}

export default TypeMe;
