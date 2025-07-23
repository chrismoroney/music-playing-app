import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import SongList from './Components/SongList';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [setlist, setSetlist] = useState([]);

  const handleAddToSetlist = (song) => {
    if (!setlist.some((s) => s.id === song.id)) {
      setSetlist([...setlist, song]);
    }
  };

  return (
    <div>
      <h1>Music App</h1>
      <SearchBar results={searchResults} setResults={setSearchResults} onAdd={handleAddToSetlist} />
      <SongList songs={setlist} />
    </div>
  );
};

export default App;
