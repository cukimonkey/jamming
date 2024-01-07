import React from "react";
import styles from "./style/SearchResults.module.css"

function SearchResults() {

    const sampleResults = [
        {
          id: 1,
          title: "Song Title 1",
          artist: "Artist 1",
          genre: "Genre 1"
        },
        
        {
          id: 2,
          title: "Song Title 2",
          artist: "Artist 2",
          genre: "Genre 2"
        },

        {
            id: 3,
            title: "Song Title 3",
            artist: "Artist 3",
            genre: "Genre 3"
          },
       
      ];

return (
    <div className={styles.searchResults}>
        <h2 className={styles.resultHeading}>Results</h2>
        <ul>
        {sampleResults.map((song) => (
            <li key={song.id} className={styles.resultItem}>
            <div>
                <div className={styles.resultTitle}><strong>Title:</strong> {song.title}</div>
                <div className={styles.resultArtist}><strong>Artist:</strong> {song.artist}</div>
                <div className={styles.resultGenre}><strong>Genre:</strong> {song.genre}</div>
            </div>
            <button className={styles.resultRemoveButton}>+</button>
            </li>
        ))}
      </ul>
    </div>
)

}

export default SearchResults;