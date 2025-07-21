import React, { useState } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';

function App() {
  const [songs, setSongs] = useState([]);
  const [sortBy, setSortBy] = useState('title');

  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  const removeSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  const sortedSongs = [...songs].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h1>🎵 My Playlist</h1>
      <SongForm onAddSong={addSong} />
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
