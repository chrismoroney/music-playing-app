import React from 'react';
import SongItem from './SongItem';

const SearchResults = ({ results, onAdd }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {results.length === 0 ? (
        <p>No results</p>
      ) : (
        results.map((song) => (
          <div key={song.id}>
            <SongItem song={song} />
            <button onClick={() => onAdd(song)}>Add to Setlist</button>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
