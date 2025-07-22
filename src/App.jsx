import React, { useState } from 'react';
import SongForm from './Components/SongForm';
import SongList from './Components/SongList';
import SearchBar from './Components/Searchbar';

function App() {
  const [songs, setSongs] = useState([]);
  const [sortBy, setSortBy] = useState('title');

  const addSong = (song) => {
    // prevent duplicates
    setSongs(prev => prev.some(s => s.id === song.id) ? prev : [...prev, song]);
  };

  const removeSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  const sortedSongs = [...songs].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="App">
      <h1>🎵 My Playlist</h1>
      <SearchBar onAddSong={addSong} />
      <div style={{ marginTop: '1rem' }}>
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="title">Title</option>
          <option value="artist">Artist</option>
        </select>
      </div>
      <SongList songs={sortedSongs} onRemove={removeSong} />
    </div>
  );
}
export default App;