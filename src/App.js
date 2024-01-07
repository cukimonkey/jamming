
import React, {useState} from 'react';
import styles from './style/App.module.css';
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults"
import Playlist from './Playlist';
import Spotify from './Spotify';

function App(){

  const [searchResults, setSearchResults] = useState([]);  
  const [playlist, setPlaylist] = useState([]);

  const search = (term) => {
    Spotify.search(term).then(searchResults => {
      setSearchResults(searchResults);
    });
  };

  const addToPlaylist = (song) => {
    if (!playlist.find(p => p.id === song.id)) {
      setPlaylist([...playlist, song]);
    }
  };

  const removeFromPlaylist = (songId) => {
    setPlaylist(playlist.filter(song => song.id !== songId));
  };

  return (
    <div> 
      <h1 className={styles.searchHeading}>Jamming</h1>
      <SearchBar onSearch={search} />
        <div className={styles.bodyContainer}>
        <SearchResults searchResults={searchResults} onAdd={addToPlaylist} />
        <Playlist songs={playlist} onRemove={removeFromPlaylist}/>
        </div>
    </div>
  );
}

export default App;
