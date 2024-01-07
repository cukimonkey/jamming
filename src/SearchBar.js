import React, {useState} from "react";
import styles from "./style/SearchBar.module.css"

function SearchBar({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm(''); // Reset the input field after search
  };

return (
<div className={styles['searchBar']}>
      <div className={styles['inputGroup']}>
        <label htmlFor="searchInput" className={styles['searchLabel']}>Search:</label>
        <input 
        type="text" 
        value={searchTerm}
        id="searchInput" 
        placeholder="Enter a Song, Album, or Artist" 
        className={styles['searchInput']} 
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSearch()}
     
         />
      </div>
      <div className={styles['buttonGroup']}>
        <button 
        type="submit" 
        className={styles['searchButton']}
        onClick={handleSearch}
        >Search</button>
      </div>
    </div>

);
}

export default SearchBar;