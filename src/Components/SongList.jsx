import React from 'react';
import SongItem from './SongItem';

function SongList({ songs, onRemove }) {
  return (
    <ul style={{ marginTop: '1rem' }}>
      {songs.map((song) => (
        <SongItem key={song.id} song={song} onRemove={onRemove} />
      ))}
    </ul>
  );
}

export default SongList;
