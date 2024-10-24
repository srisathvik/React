import {useState } from "react";

export default function StateLogin() {

  const[enteredValues, setEnteredValues] = useState({
    Email: '',
    Password: ''
  });

  const[didEdit, setDidEdit] = useState({
    Email: false,
    Password: false,
  })

  const emailIsInvalid = didEdit.Email != '' && !enteredValues.Email.includes('@');
  function handleSubmit(event){
    event.preventDefault();
    console.log("user Email: " + enteredValues.Email + " user Password: ", enteredValues.Password);
  }

  function handleInputChange(identifier, event) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier] : event.target.value
    }));

    setDidEdit(prevData =>({
        ...prevData,
        [identifier] : false
    }));
  }

  function handleInputBlur(identifier) {
        setDidEdit(prevData => ({
            ...prevData,
            [identifier] : true
        }))
  }
  // function handlePasswordChange(identifier, event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            // ref={email}
            onBlur={()=>{handleInputBlur('Email')}}
            value={enteredValues.Email}
            onChange={(event) => {handleInputChange("Email", event)}}

          />
          <div className="control-error">{emailIsInvalid && <p>Enter valid Email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            // ref={password}
            value={enteredValues.Password}
            onChange={(event) => {handleInputChange("Password", event)}}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
