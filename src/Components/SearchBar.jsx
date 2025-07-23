import React, { useState } from 'react';

const SearchBar = ({ results, setResults, onAdd }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5001/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      const withIds = Array.isArray(data.results)
        ? data.results.map((item, index) => ({
            ...item,
            id: item.id || `result-${index}`,
          }))
        : [];
      setResults(withIds);
    } catch (error) {
      console.error('Fetch error:', error);
      setResults([]);
    }
  };

  return (
    <div>
      <h2>Search Songs</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter song name or artist"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h3>Search Results</h3>
      <ul>
        {results.length > 0 ? (
          results.map((song, i) => (
            <li key={song.id || i}>
              {song.name || song.title || `Song ${i + 1}`}
              <button onClick={() => onAdd(song)}>Add</button>
            </li>
          ))
        ) : (
          <p>No results</p>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
