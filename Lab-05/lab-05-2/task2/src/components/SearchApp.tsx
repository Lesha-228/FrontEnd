// src/components/SearchApp.tsx
import React, { useState } from 'react';
import { User } from '../types/types';

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 28 },
  { name: "Diana", email: "diana@mail.com", age: 22 },
  { name: "Eve", email: "eve@mail.com", age: 35 },
  { name: "Frank", email: "frank@mail.com", age: 27 }
];

const SearchApp = () => {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };


  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Поиск пользователей</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Поиск по имени..."
          value={searchTerm}
          onChange={handleSearch} />
        
      
        <button
          onClick={handleClear}>
          Clear
        </button>
      </div>


      <p style={{ fontWeight: 'bold' }}>
        Найдено: {filteredUsers.length} из {users.length}
      </p>

      <div>
        {filteredUsers.map((user, index) => (
          <div key={index}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>Возраст: {user.age}</p>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p style={{ color: 'red', textAlign: 'center', fontSize: '18px' }}>
          Ничего не найдено
        </p>
      )}
    </div>
  );
};

export default SearchApp;