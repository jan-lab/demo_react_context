import { useState, useContext } from 'react';
import { userContext } from './providers/AuthProvider';

export default function UserLogin() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { auth, login } = useContext(userContext);

  const onEmailChange = function (event) {
    setEmailInput(event.target.value);
  };

  const onPasswordChange = function (event) {
    setPasswordInput(event.target.value);
  };

  const onSubmit = function (event) {
    event.preventDefault();
    login(emailInput, passwordInput);
  };

  return (
    !auth &&
    <div className="login">
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name="login" value={emailInput} placeholder="Email Address" onChange={onEmailChange} />
        </div>
        <p>
          <input type="password" name="password" value={passwordInput} placeholder="Password" onChange={onPasswordChange} />
        </p>
        <p className="submit">
          <input type="submit" name="commit" value="Login" />
        </p>
      </form>
    </div>
  );
};