import React from "react";
import styles from "./style/Playlist.module.css"

function Playlist(){

    const samplePaylist = [
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
        <div className={styles.playlistContainer}>
            <label id="playlistLabel" className={styles.playlistLabel}>Create your Playlist</label>
            <input id="playlistInput" className={styles.playlistInput}/>
        <div>
            <ul>
        {samplePaylist.map((song) => (
            <li key={song.id} className={styles.playlistItem}>
            <div>
                <div className={styles.playlistTitle}><strong>Title:</strong> {song.title}</div>
                <div className={styles.playlistArtist}><strong>Artist:</strong> {song.artist}</div>
                <div className={styles.playlistGenre}><strong>Genre:</strong> {song.genre}</div>
            </div>
            <button className={styles.playlistRemoveButton}>-</button>
            </li>
            ))}
            </ul>
        </div >
        <div className={styles.buttonGroup}>
            <button id="addButton" className={styles.addButton}>Add to Spotify</button>
            </div>
        </div>
    )
}

export default Playlist;