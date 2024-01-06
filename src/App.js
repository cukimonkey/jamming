
import React from 'react';
import styles from './style/App.module.css';
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults"

function App(){
  return (
    <div> 
      <h1 className={styles.searchHeading}>Jamming</h1>
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
