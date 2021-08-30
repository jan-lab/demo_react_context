import AuthProvider from './providers/AuthProvider';
import UserInfo from './UserInfo';
import UserLogin from './UserLogin';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <h2>Context Demo</h2>

      {/* Wrap children in Auth State Provider */}
      <AuthProvider>
        {<UserLogin />}
        {<UserInfo />}
      </AuthProvider>

    </div>
  );
}