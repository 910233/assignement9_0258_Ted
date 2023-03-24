import React from "react"
import { useState } from "react"

function MyForm(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleLastNameChange(e){
        setLastName(e.target.value);
    }
    function handlePhoneNumberChange(e){
        setPhoneNumber(e.target.value);
    }
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }
    function handleSubmit(event){
        console.log("Submitted")
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email address:</label> 
                <input type="email" value={email} onChange={handleEmailChange}/>
            </div>
            <div>
                <label>Name: </label> 
                <input type="text" value={name} onChange={handleNameChange}/>
            </div>
            <div>
                <label>Last name: </label> 
                <input type="text" value={lastName} onChange={handleLastNameChange}/>
            </div>
            <div>
                <label>Phone number: </label> 
                <input type="tel" pattern="[0-9]{10}" value={phoneNumber} onChange={handlePhoneNumberChange}/>
            </div>
            <div>
                <label>Password: </label> 
                <input type="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default MyForm;