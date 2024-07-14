import React from "react"
import {useState} from "react"
import ReactDOM from "react-dom"

export default function Form() {
   const [formData, setFormData] = useState({
                                    userName : "",
                                    password : "",
                                    confirmPassword : "", 
                                    subscribe : true
   })

   function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevData =>({
            ...prevData,
            [name] : type === "checkbox" ? checked : value
   })
    )
    }

    function handleSubmit(event){
        event.preventDefault();
        if(formData.password === formData.confirmPassword){
            if(formData.subscribe){
                console.log("Thanks for subscribing to news letter")
            }
            console.log("Successfully signed up")
        }
        else{
            console.log("password's doesn't match")
        }
    }
    return(
        <form onSubmit = {handleSubmit}>
            <input 
                type="email"
                name = "userName"
                placeholder = "userName or Email"
                value = {formData.userName}
                onChange = {handleChange}
            />

            <input 
                type = "password"
                name = "password"
                placeholder = "Password"
                value = {formData.password}
                onChange = {handleChange}
            />

            <input 
                type = "password"
                name = "confirmPassword"
                placeholder = "Confirm Password"
                value = {formData.confirmPassword}
                onChange = {handleChange}
            />
            <input 
                type = "checkbox"
                name = "subscribe"
                checked  = {formData.subscribe}
                onChange = {handleChange}
                id = "isSubscribed"
            />
            <label htmlFor = "isSubscribed">I want to join the newsletter</label>
            <br/>
            <br />
            <button>Sign Up</button>
        </form>
    )
}