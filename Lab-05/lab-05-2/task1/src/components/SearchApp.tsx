import React, { useState } from 'react';
import {User} from '../types/types';

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 28 },
  { name: "Diana", email: "diana@mail.com", age: 22 },
  { name: "Eve", email: "eve@mail.com", age: 35 },
];
const SearchApp = () => {
const [users] = useState<User[]>(INITIAL_DATA);
const [filteredUsers, setFilteredUsers] =
useState<User[]>(INITIAL_DATA);
const [searchTerm, setSearchTerm] = useState("");

return (
    <div style={{ padding: '20px' }}>
      <h2>Поиск пользователей</h2>

      <input
        type="text"
        placeholder="Поиск по имени или email..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />


      <p>Найдено: {filteredUsers.length} из {users.length}</p>

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
        <p style={{ color: 'red', textAlign: 'center' }}>
          Ничего не найдено
        </p>
      )}
    </div>
  );
};

export default SearchApp;