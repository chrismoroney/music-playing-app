import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [setlist, setSetlist] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5001/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(Array.isArray(data.results) ? data.results : []);
    } catch (error) {
      console.error('Fetch error:', error);
      setResults([]);
    }
  };

  const addToSetlist = (song) => {
    if (!setlist.some(item => item.id === song.id)) {
      setSetlist([...setlist, song]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      <h3>Search Results</h3>
      <ul>
        {results.map(song => (
          <li key={song.id}>
            {song.title} by {song.artist}
            <button onClick={() => addToSetlist(song)}>Add</button>
          </li>
        ))}
      </ul>

      <h3>Your Setlist</h3>
      <ul>
        {setlist.map(song => (
          <li key={song.id}>
            {song.title} by {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
