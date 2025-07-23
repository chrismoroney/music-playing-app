import React, { useState } from 'react';

const SongForm = ({ onAddSong }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !artist) return;
    onAddSong({ title, artist });
    setTitle('');
    setArtist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Song Manually</h3>
      <input
        type="text"
        placeholder="Song title"
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
};

export default SongForm;
