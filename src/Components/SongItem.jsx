import React from 'react';

function SongItem({ song, onRemove }) {
  return (
    <li>
      {song.title} - {song.artist}
      <button style={{ marginLeft: '1rem' }} onClick={() => onRemove(song.id)}>
        ❌ Remove
      </button>
    </li>
  );
}

export default SongItem;
