import React from 'react';

const SongList = ({ songs }) => (
  <div>
    <h2>Setlist</h2>
      <ul>
      {songs.length > 0 ? (
        songs.map((song) => (
          <li key={song.id}>
            {song.name || song.title}
          </li>
        ))
      ) : (
        <p>No songs in setlist.</p>
      )}
      </ul>
  </div>
);

export default SongList;
