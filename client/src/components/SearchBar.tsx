import React from 'react';
import type { UserData } from "../interfaces/UserData";

interface UserListProps {
    users: UserData[] | null; 
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
};


const exampleUsers: UserData[] = [
  { id: 1, name: "Alice", username: "alice123", email: "alice@example.com" },
  { id: 2, name: "Bob", username: "bob456", email: "bob@example.com" },
];

<UserList users={exampleUsers} />;

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}
  export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search breeds..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button>🔍</button>
      </div>
    );
  }