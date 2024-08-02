import React from 'react';

interface RegisterFormProps {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  error: string;
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  error,
  onSwitchToLogin
}) => {
  return (
    <div>
      <h2>Register</h2>
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
        Register
      </button>
      <p>
        Already have an account?{' '}
        <button className="btn btn-link" onClick={onSwitchToLogin}>
          Login here
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
