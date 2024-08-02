import React, { useState, ChangeEvent } from 'react';
import { auth } from '../firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import UserInfo from '../components/UserInfo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState<firebase.default.User | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      setUser(userCredential.user);
      setError('');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleRegister = async () => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      setUser(userCredential.user);
      setIsRegistered(true);
      setError('');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setIsRegistered(false);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const goToProducts = () => {
    navigate('/products');
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      {user ? (
        <UserInfo
          email={user.email}
          onLogout={handleLogout}
          onGoToProducts={goToProducts}
        />
      ) : isRegistered ? (
        <RegisterForm
          email={email}
          password={password}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
          onSubmit={handleRegister}
          error={error}
          onSwitchToLogin={() => setIsRegistered(false)}
        />
      ) : (
        <LoginForm
          email={email}
          password={password}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
          onSubmit={handleLogin}
          error={error}
          onSwitchToRegister={() => setIsRegistered(true)}
        />
      )}
    </div>
  );
};

export default Login;
