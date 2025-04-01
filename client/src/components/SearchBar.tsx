import React from 'react';

import type { UserData } from "../interfaces/UserData";
//import auth from '../utils/auth';

// Define the props for the component
interface UserListProps {
    users: UserData[] | null; // users can be an array of UserData objects or null
}

const UserList: React.FC<UserListProps> = ({ users }) => {
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