import React from 'react';

interface UserInfoProps {
  email: string | null;
  onLogout: () => void;
  onGoToProducts: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ email, onLogout, onGoToProducts }) => {
  return (
    <div>
      <h2>Welcome, {email}</h2>
      <button className="btn btn-primary" onClick={onGoToProducts}>
        Go to Products
      </button>
      <button className="btn btn-danger" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserInfo;
