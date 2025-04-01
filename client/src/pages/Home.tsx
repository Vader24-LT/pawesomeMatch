import { useState, useEffect } from 'react';
import { Breed } from '../interfaces/Breed';
import SearchBar from '../components/SearchBar';
import UserProfile from '../components/UserProfile';
import BreedCard from '../components/BreedCard';
import './Home.css';

const categories = [
  {
    name: 'Family Dogs',
    breeds: ['Havanese', 'Cocker Spaniel', 'Labrador']
  },
  {
    name: 'Designer Dogs',
    breeds: ['Shih Tzu', 'Poodle', 'Yorkie']
  },
  {
    name: 'Work Dogs',
    breeds: ['Australian Shepherd', 'Border Collie', 'Irish Wolfhound']
  }
];

export default function Home() {
  const [allBreeds, setAllBreeds] = useState<Breed[]>([]);
  const [filteredBreeds, setFilteredBreeds] = useState<Breed[]>([]);
  const [favorites, setFavorites] = useState<Breed[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [breedsResponse, favoritesResponse] = await Promise.all([
          fetch('/api/breeds'),
          fetch('/api/favorites', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
        ]);

        if (!breedsResponse.ok) throw new Error('Failed to fetch breeds');
        if (!favoritesResponse.ok) throw new Error('Failed to fetch favorites');

        const [breedsData, favoritesData] = await Promise.all([
          breedsResponse.json(),
          favoritesResponse.json()
        ]);

        setAllBreeds(breedsData);
        setFilteredBreeds(breedsData);
        setFavorites(favoritesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/breeds');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setAllBreeds(data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
        // Set error state to show user feedback
        setError('Failed to load breeds. Please try again later.');
      }
    };
  
    fetchBreeds();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredBreeds(allBreeds);
    } else {
      const filtered = allBreeds.filter(breed =>
        breed.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBreeds(filtered);
    }
  }, [searchTerm, allBreeds]);

  const getBreedsForCategory = (categoryBreeds: string[]) => {
    return allBreeds.filter(breed => 
      categoryBreeds.some(name => 
        breed.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="home-container">
      <header className="app-header">
        <h1 className="main-title">We will help you find your Pawesome Match!</h1>
        
        <div className="header-controls">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <UserProfile favorites={favorites} />
        </div>
      </header>

      <main className="breed-sections">
        {searchTerm ? (
          <section className="search-results">
            <h2>Search Results</h2>
            <div className="breed-grid">
              {filteredBreeds.map(breed => (
                <BreedCard key={breed.id} breed={breed} />
              ))}
              {filteredBreeds.length === 0 && (
                <p className="no-results">No breeds match your search</p>
              )}
            </div>
          </section>
        ) : (
          categories.map(category => {
            const categoryBreeds = getBreedsForCategory(category.breeds);
            
            return (
              <section key={category.name} className="category-section">
                <h2 className="category-title">{category.name}</h2>
                <div className="breed-grid">
                  {categoryBreeds.map(breed => (
                    <BreedCard key={breed.id} breed={breed} />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>
    </div>
  );
}