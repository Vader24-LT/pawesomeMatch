import { Link } from 'react-router-dom'; 
import { Breed } from '../interfaces/Breed';
import './BreedCard.css'; 

interface BreedCardProps {
  breed: Breed;
}

export default function BreedCard({ breed }: BreedCardProps) {
  return (
    <div className="breed-card">
      <Link to={`/breeds/${breed.id}`} className="breed-link">
        <img 
          src={breed.image_url} 
          alt={breed.name} 
          className="breed-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/default-dog.jpg';
          }}
        />
        <div className="breed-info">
          <h3>{breed.name}</h3>
          <p className="temperament">
            {breed.temperament.split(',')[0].trim()}
          </p>
          <span className={`size-tag ${breed.size.toLowerCase()}`}>
            {breed.size}
          </span>
        </div>
      </Link>
    </div>
  );
}