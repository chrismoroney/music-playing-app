import React, { useState } from 'react';

function SongForm({ onAddSong }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && artist) {
      onAddSong({ id: Date.now().toString(), title, artist });
      setTitle('');
      setArtist('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default SongForm;
