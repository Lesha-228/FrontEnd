import React, { useState } from 'react';
import { User } from '../types/types';
import UserCard from './UserCard';

const INITIAL_DATA: User[] = [
  { name: "Alice Johnson", email: "alice@mail.com", age: 25 },
  { name: "Bob Smith", email: "bob@mail.com", age: 30 },
  { name: "Charlie Brown", email: "charlie@mail.com", age: 28 },
  { name: "Diana Prince", email: "diana@mail.com", age: 22 },
  { name: "Eve Davis", email: "eve@mail.com", age: 35 },
  { name: "Frank Miller", email: "frank@mail.com", age: 27 },
  { name: "Grace Lee", email: "grace@mail.com", age: 29 },
  { name: "Henry Wilson", email: "henry@mail.com", age: 31 }
];
const  SearchApp: React.FC = () => {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const term: string = event.target.value;
    setSearchTerm(term);
    
    const filtered: User[] = users.filter((u: User) =>
      u.name.toLowerCase().includes(term.toLowerCase()) ||
      u.email.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredUsers(filtered);
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setSearchTerm("");
    setFilteredUsers(users);
  };
  return (
    <div>
      <h1>
        Поиск пользователей
      </h1>
      

      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '20px' 
      }}>
        <input
          type="text"
          placeholder="Поиск по имени или email..."
          value={searchTerm}
          onChange={handleSearch}/>
        
        <button onClick={handleClear}>
          Clear
        </button>
      </div>

    
      <p>
        Найдено: {filteredUsers.length} из {users.length} пользователей
      </p>

     
      {filteredUsers.length > 0 ? (
        <div>
          {filteredUsers.map((user: User, index: number) => (
            <UserCard 
              key={index} 
              user={user} 
              isActive={true}
            />
          ))}
        </div>
      ) : (
        
        <div>
          <h2>
            Ничего не найдено
          </h2>
          <p>
            Попробуйте изменить поисковый запрос
          </p>
        </div>
      )}
    </div>
  );
};
export default SearchApp;