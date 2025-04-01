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