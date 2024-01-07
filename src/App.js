
import React from 'react';
import styles from './style/App.module.css';
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults"
import Playlist from './Playlist';

function App(){
  return (
    <div> 
      <h1 className={styles.searchHeading}>Jamming</h1>
      <SearchBar />
        <div className={styles.bodyContainer}>
        <SearchResults />
        <Playlist />
        </div>
    </div>
  );
}

export default App;
