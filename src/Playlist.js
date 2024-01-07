import React, {useState} from "react";
import styles from "./style/Playlist.module.css"

function Playlist({songs, onRemove}){

const [playlistName, setPlaylistName] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setPlaylistName(event.target.value);
      setIsEditing(false);
    }
  };

  const handleNameClick = () => {
    setIsEditing(true);
  };

    return (
        <div className={styles.playlistContainer}>
           {isEditing ? (
        <input
          id="playlistInput"
          className={styles.playlistInput}
          placeholder="Name your Playlist"
          onKeyDown={handleKeyPress}
          autoFocus
        />
      ) : (
        <h3 className={styles.playlistName} onClick={handleNameClick}>
          {playlistName}
        </h3>
      )}
      <div>
            <ul>
        {songs.map((song) => (
            <li key={song.id} className={styles.playlistItem}>
            <div>
                <div className={styles.playlistTitle}><strong>Title:</strong> {song.title}</div>
                <div className={styles.playlistArtist}><strong>Artist:</strong> {song.artist}</div>
                <div className={styles.playlistAlbum}><strong>Album:</strong> {song.album}</div>
                <div className={styles.playlistGenre}><strong>Genre:</strong> {song.genre}</div>
            </div>
            <button className={styles.playlistRemoveButton} onClick={() => onRemove(song.id)}>-</button>
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