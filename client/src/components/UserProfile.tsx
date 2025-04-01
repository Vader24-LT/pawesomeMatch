
import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Breed } from '../interfaces/Breed';
import './UserProfile.css';

interface UserProfileProps {
  favorites: Breed[];
  userName?: string;
}

export default function UserProfile({ favorites, userName = 'User' }: UserProfileProps) {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="user-profile">
      <button 
        className="profile-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="User profile"
      >
        👤 {userName}
      </button>
      
      {isOpen && (
        <div className="favorites-dropdown">
          <h4>Your Favorites</h4>
          {favorites.length > 0 ? (
            <ul>
              {favorites.map(breed => (
                <li key={breed.id}>
                  <Link to={`/breeds/${breed.id}`}>{breed.name}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No favorites yet!</p>
          )}
        </div>
      )}
    </div>
  );
}