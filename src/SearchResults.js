import React from "react";
import styles from "./style/SearchResults.module.css"

function SearchResults({onAdd, searchResults}) {


return (
    <div className={styles.searchResults}>
        <h2 className={styles.resultHeading}>Results</h2>
        <ul>
        {searchResults.map((song) => (
            <li key={song.id} className={styles.resultItem}>
            <div>
                <div className={styles.resultTitle}><strong>Title:</strong> {song.title}</div>
                <div className={styles.resultArtist}><strong>Artist:</strong> {song.artist}</div>
                <div className={styles.resultAlbum}><strong>Album:</strong> {song.album}</div>
                <div className={styles.resultGenre}><strong>Genre:</strong> {song.genre}</div>
            </div>
            <button className={styles.resultRemoveButton} onClick={() => onAdd(song)}>+</button>
            </li>
        ))}
      </ul>
    </div>
)

}

export default SearchResults;