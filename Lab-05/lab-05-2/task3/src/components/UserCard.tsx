import React from 'react';
import { User } from '../types/types';

interface UserCardProps {
  user: User;
  isActive?: boolean;
  children?: React.ReactNode;
}

const UserCard = ({ 
  user, 
  isActive = true,
  children 
}: UserCardProps) => {
  return (
    <div>
      <h2>
        {user.name}
      </h2>
      <p style={{ margin: '5px 0' }}>
         {user.email}
      </p>
      <p> Возраст: {user.age}
      </p>
      <p>
        {isActive ? 'Активен' : 'Неактивен'}
      </p>
      {children && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default UserCard;