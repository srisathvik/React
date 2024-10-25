import Input from "./Input";
import useInput from "../hooks/useInput";
import {isEmail, isNotEmpty, hasMinLength} from '../util/validation'
export default function StateLogin() {

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const{
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) =>hasMinLength(value, 6));
  // const emailIsInvalid = didEdit.Email && isEmail(enteredValues.Email) && !isNotEmpty(enteredValues.Email);
  // const passwordIsInvalid = didEdit.Password && !hasMinLength(enteredValues.Password, 6);

  function handleSubmit(event){
    event.preventDefault();
    if(emailHasError || passwordHasError){
      return; 
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email" 
          id="email" 
          type="email" 
          name="email" 
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailChange}
          error={emailHasError && "Enter valid Email"}
          />
        <Input 
          label="Password" 
          id="password" 
          type="password" 
          name="password" 
          onBlur={handlePasswordBlur}
          value={passwordValue}
          onChange={handlePasswordChange}
          error={passwordHasError && "Enter valid Password"}
          />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
