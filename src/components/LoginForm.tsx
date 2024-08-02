import React from 'react';

interface LoginFormProps {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  error: string;
  onSwitchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  error,
  onSwitchToRegister
}) => {
  return (
    <div>
      <h2>Login</h2>
      {error && <p className="text-danger">{error}</p>}
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        className="form-control mb-2"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        className="form-control mb-2"
      />
      <button className="btn btn-primary mb-2" onClick={onSubmit}>
        Login
      </button>
      <p>
        Don't have an account?{' '}
        <button className="btn btn-link" onClick={onSwitchToRegister}>
          Register here
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
