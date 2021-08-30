import { useContext } from 'react';
import { userContext } from './providers/AuthProvider';

export default function UserInfo() {
  const { auth, user, logout } = useContext(userContext);

  const onLogout = function (event) {
    logout();
  };

  // Show user Info if logged in
  return (
    auth &&
    <div className="UserInfo">
      <div>State: Logged in</div>
      <div>Email: {user.email}</div>
      <div>Name: {user.name}</div>
      <input type="button" value="Logout" onClick={onLogout} />
    </div>
  );
};
