import {useRef } from "react";

export default function Login() {

  // const[enteredValues, setEnteredValues] = useState({
  //   Email: '',
  //   Password: ''
  // });
  // const[enteredPassword, setEnteredPassword] = useState('');
  const email = useRef();
  const password = useRef();

  function handleSubmit(event){
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log("user Email: " + enteredEmail + " user Password: ", enteredPassword);
  }

  // function handleInputChange(identifier, event) {
  //   setEnteredValues(prevValues => ({
  //     ...prevValues,
  //     [identifier] : event.target.value
  //   }));
  // }

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
            ref={email}
            // value={enteredValues.Email}
            // onChange={(event) => {handleInputChange("Email", event)}}

          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            ref={password}
            // value={enteredValues.Password}
            // onChange={(event) => {handleInputChange("Password", event)}}
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
