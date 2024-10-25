import { useState } from "react";
export default function useInput(defaultValue, validationFcn){
    const[enteredValue, setEnteredValue] = useState(defaultValue);
    
    const[didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFcn(enteredValue);

    function handleInputChange(event) {
    setEnteredValue(event.target.value);

    setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true)
    }

    return{
        value : enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }
}