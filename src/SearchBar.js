import React from "react";
import styles from "./style/SearchBar.module.css"

function SearchBar() {

return (
<div className={styles['searchBar']}>
      <div className={styles['inputGroup']}>
        <label htmlFor="searchInput" className={styles['searchLabel']}>Search:</label>
        <input type="text" id="searchInput" className={styles['searchInput']} placeholder="Enter your search here" />
      </div>
      <div className={styles['buttonGroup']}>
        <button type="submit" className={styles['searchButton']}>Search</button>
      </div>
    </div>

);
}

export default SearchBar;