import React, {useState} from "react";
import Spotify from "./Spotify";
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

  const savePlaylist = () => {
    if (!playlistName.trim()) {
        alert("Please enter a playlist name.");
        return;
      }
    
      const trackUris = songs.map(song => song.uri);
      Spotify.savePlaylist(playlistName, trackUris)
        .then(() => {
          alert(`Playlist "${playlistName}" added to Spotify`);
          // Optionally, clear the playlist in the UI after saving
          setPlaylistName('');
          // Reset the songs state if you have a method to do so
        })
        .catch(error => {
          console.error('Error saving playlist:', error);
          alert("There was an error saving your playlist.");
        });
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
            <button id="addButton" className={styles.addButton} onClick={savePlaylist}>Add to Spotify</button>
            </div>
        </div>
    )
}

export default Playlist;